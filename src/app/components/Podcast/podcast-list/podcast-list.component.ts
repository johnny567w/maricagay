import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { Podcast } from '../../../models/podcast.model';
import { PodcastService } from '../../../services/podcast.service';

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
  detallesVisibles: { [key: string]: boolean } = {}; // 🔹 Controla qué podcasts muestran detalles

  constructor(private router: Router, private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.cargarPodcasts();
  }

  /** 🔹 Cargar todos los podcasts desde la base de datos */
  cargarPodcasts() {
    this.podcastService.getAllPodcasts().subscribe(
      (data) => {
        this.podcasts = data;
        this.obtenerPodcastMasPopular();
      },
      (error) => {
        console.error('Error al obtener los podcasts:', error);
      }
    );
  }

  /** 🔹 Encontrar el podcast con más reproducciones */
  obtenerPodcastMasPopular() {
    if (this.podcasts.length > 0) {
      this.podcastMasPopular = this.podcasts.reduce((max, podcast) =>
        podcast.reproducciones > max.reproducciones ? podcast : max
      );
    }
  }

  /** 🔹 Ordenar los podcasts */
  ordenarPor(campo: 'reproducciones' | 'fecha') {
    this.podcasts.sort((a, b) => {
      if (campo === 'reproducciones') {
        return b.reproducciones - a.reproducciones;
      } else {
        return new Date(b.fechaTema).getTime() - new Date(a.fechaTema).getTime();
      }
    });
  }

  /** 🔹 Alternar la visibilidad de los detalles */
  toggleDetalles(id: string) {
    this.detallesVisibles[id] = !this.detallesVisibles[id];
  }

  /** 🔹 Eliminar un podcast */
  eliminarPodcast(id: string, index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este podcast?')) {
      this.podcastService.deletePodcast(id).subscribe(() => {
        this.podcasts.splice(index, 1); 
        this.obtenerPodcastMasPopular();
      });
    }
  }
}
