import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { PodcastService } from '../../../services/podcast.service';
import { Podcast } from '../../../models/podcast.model';
import { Locutor } from '../../../models/locutor.model';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';

@Component({
  selector: 'app-podcast-crear',
  standalone: true,
  imports: [NavbarComponent,CommonModule, ReactiveFormsModule, HttpClientModule],  // Añade HttpClientModule aquí
  templateUrl: './podcast-crear.component.html',
  providers: [PodcastService]
})
export class PodcastCrearComponent {
  podcastForm: FormGroup;
  audioFile: File | null = null;

  constructor(private fb: FormBuilder, private podcastService: PodcastService) {
    this.podcastForm = this.fb.group({
      temaGeneral: [''],
      temaDia: [''],
      fechaTema: [''],
      locutorPrincipal: this.fb.group({
        mail: [''],
        nickname: [''],
        pais: ['']
      }),
      locutoresInvitados: this.fb.array([]),
      reproducciones: [0]
    });
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

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.audioFile = file;
    }
  }

  submit() {
    if (this.podcastForm.valid) {
      const podcast: Podcast = {
        id: '',
        temaGeneral: this.podcastForm.value.temaGeneral,
        temaDia: this.podcastForm.value.temaDia,
        fechaTema: this.podcastForm.value.fechaTema,
        audioUrl: '',
        locutorPrincipal: this.podcastForm.value.locutorPrincipal,
        locutoresInvitados: this.podcastForm.value.locutoresInvitados as Locutor[],
        reproducciones: this.podcastForm.value.reproducciones
      };

      this.podcastService.createPodcast(podcast).subscribe(
        (response: Podcast) => {
          console.log('Podcast creado:', response);
        },
        (error: any) => {
          console.error('Error al crear el podcast:', error);
        }
      );
    }
  }
}
