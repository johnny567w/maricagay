import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PodcastService } from '../../../services/podcast.service';
import { Podcast } from '../../../models/podcast.model';
import { Locutor } from '../../../models/locutor.model';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';

@Component({
  selector: 'app-podcast-crear',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './podcast-crear.component.html',
  providers: [PodcastService]
})
export class PodcastCrearComponent {
  podcastForm: FormGroup;
  audioFile: File | null = null;
  mensajeConfirmacion: string = ''; 
  errorCreacion: string = ''; 
  podcasts: Podcast[] = [];

  constructor(private fb: FormBuilder, private podcastService: PodcastService) {
    this.podcastForm = this.fb.group({
      temaGeneral: [''],
      temaDia: [''],
      fechaTema: [''], 
      audioUrl: [''],
      locutorPrincipal: this.fb.group({ 
        mail: [''],
        nickname: [''],
        pais: ['']
      }),
      locutoresInvitados: this.fb.array([]),
      reproducciones: [this.generarReproduccionesAleatorias()]
    });

    this.cargarPodcasts(); 
  }

  cargarPodcasts() {
    this.podcastService.getAllPodcasts().subscribe(
      (data) => {
        this.podcasts = data;
        this.mensajeConfirmacion = `Se han cargado ${this.podcasts.length} podcasts.`;
        this.errorCreacion = '';
      },
      (error) => {
        this.errorCreacion = '❌ Error al cargar los podcasts. Inténtalo nuevamente.';
        this.mensajeConfirmacion = '';
      }
    );
  }

  get locutoresInvitados(): FormArray {
    return this.podcastForm.get('locutoresInvitados') as FormArray;
  }

  agregarLocutor() {
    this.locutoresInvitados.push(
      this.fb.group({
        mail: [''],
        nickname: [''],
        pais: ['']
      })
    );
  }

  eliminarLocutor(index: number) {
    this.locutoresInvitados.removeAt(index);
  }

  private generarReproduccionesAleatorias(): number {
    return Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.audioFile = file;
      this.podcastForm.patchValue({ audioUrl: file.name });
    }
  }

  submit() {
    if (this.podcastForm.valid) {
      const fechaValida = new Date(this.podcastForm.value.fechaTema).toISOString().split('T')[0]; 

      const podcast: Podcast = {
        id: '', 
        temaGeneral: this.podcastForm.value.temaGeneral,
        temaDia: this.podcastForm.value.temaDia,
        fechaTema: fechaValida,
        audioUrl: this.podcastForm.value.audioUrl || '', 
        locutorPrincipal: { 
          mail: this.podcastForm.value.locutorPrincipal.mail,
          nickname: this.podcastForm.value.locutorPrincipal.nickname,
          pais: this.podcastForm.value.locutorPrincipal.pais
        },
        locutoresInvitados: this.locutoresInvitados.controls.map(control => ({
          mail: control.value.mail,
          nickname: control.value.nickname,
          pais: control.value.pais
        })) as Locutor[], 
        reproducciones: this.generarReproduccionesAleatorias()
      };

      this.podcastService.createPodcast(podcast).subscribe(
        (response: Podcast) => {
          this.mensajeConfirmacion = '✅ Podcast creado exitosamente 🎉';
          this.errorCreacion = '';
          this.podcasts.unshift(response);
          this.podcastForm.reset();
          this.podcastForm.patchValue({ reproducciones: this.generarReproduccionesAleatorias() });
        },
        (error: any) => {
          this.errorCreacion = '❌ Error al crear el podcast. Intenta nuevamente.';
          this.mensajeConfirmacion = '';
        }
      );
    }
  }
}
