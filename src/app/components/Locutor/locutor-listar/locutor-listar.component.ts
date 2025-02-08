import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { PodcastService } from '../../../services/podcast.service';
import { Locutor } from '../../../models/locutor.model';
import { Podcast } from '../../../models/podcast.model';

@Component({
  selector: 'app-locutor-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HttpClientModule],
  templateUrl: './locutor-listar.component.html',
  providers: [PodcastService] 
})
export class LocutorListComponent implements OnInit {
  locutores: Locutor[] = [];
  mensajeError: string = '';
  mensajeExito: string = '';

  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.cargarLocutores();
  }

  cargarLocutores() {
    this.podcastService.getAllPodcasts().subscribe(
      (podcasts: Podcast[]) => {
        this.locutores = [];
        this.mensajeError = '';
        
        podcasts.forEach(podcast => {
          if (!this.locutores.some(l => l.mail === podcast.locutorPrincipal.mail)) {
            this.locutores.push(podcast.locutorPrincipal);
          }

          podcast.locutoresInvitados.forEach(inv => {
            if (!this.locutores.some(l => l.mail === inv.mail)) {
              this.locutores.push(inv);
            }
          });
        });

        if (this.locutores.length === 0) {
          this.mensajeError = 'No hay locutores disponibles.';
        } else {
          this.mensajeExito = `Se han encontrado ${this.locutores.length} locutores.`;
        }
      },
      (error) => {
        this.mensajeError = '❌ Error al cargar los locutores. Inténtalo nuevamente.';
        this.mensajeExito = '';
      }
    );
  }

  verDetalles(id: string) {
    this.mensajeExito = `🔎 Mostrando detalles del locutor con correo: ${id}`;
  }

  eliminarLocutor(index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este locutor de la lista?')) {
      this.locutores.splice(index, 1);
      this.mensajeExito = 'Locutor eliminado correctamente.';
    }
  }
}
