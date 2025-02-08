import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { PodcastService } from '../../../services/podcast.service';
import { Podcast } from '../../../models/podcast.model';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HttpClientModule],
  templateUrl: './podcast-list.component.html',
  providers: [PodcastService] 
})
export class PodcastListComponent implements OnInit {
  podcasts: Podcast[] = [];
  podcastMasPopular!: Podcast;
  detallesVisibles: { [key: string]: boolean } = {};
  mensajeConfirmacion: string = ''; 
  errorCargar: string = ''; 

  constructor(private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.cargarPodcasts();
  }

  cargarPodcasts() {
    this.podcastService.getAllPodcasts().subscribe(
      (data) => {
        this.podcasts = data;
        this.obtenerPodcastMasPopular();
        this.mensajeConfirmacion = `Se han cargado ${this.podcasts.length} podcasts.`;
        this.errorCargar = '';
      },
      (error) => {
        this.errorCargar = '❌ Error al cargar los podcasts. Inténtalo nuevamente.';
        this.mensajeConfirmacion = '';
      }
    );
  }

  obtenerPodcastMasPopular() {
    if (this.podcasts.length > 0) {
      this.podcastMasPopular = this.podcasts.reduce((max, podcast) =>
        podcast.reproducciones > max.reproducciones ? podcast : max
      );
    }
  }

  ordenarPor(campo: 'reproducciones' | 'fecha') {
    this.podcasts.sort((a, b) => {
      if (campo === 'reproducciones') {
        return b.reproducciones - a.reproducciones;
      } else {
        return new Date(b.fechaTema).getTime() - new Date(a.fechaTema).getTime();
      }
    });
  }

  toggleDetalles(id: string) {
    this.detallesVisibles[id] = !this.detallesVisibles[id];
  }

  eliminarPodcast(id: string, index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este podcast?')) {
      this.podcastService.deletePodcast(id).subscribe(() => {
        this.podcasts.splice(index, 1); 
        this.obtenerPodcastMasPopular();
        this.mensajeConfirmacion = 'Podcast eliminado correctamente.';
      });
    }
  }
}
