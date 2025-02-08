import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './podcast-list.component.html',
})
export class PodcastListComponent {
  podcasts = [
    {
      id: 1,
      temaGeneral: 'Tecnología en el futuro',
      locutorPrincipal: { nickname: 'TechMaster' },
      fecha: '2024-02-07',
      reproducciones: 1500,
      estado: 'Activo',
    },
    {
      id: 2,
      temaGeneral: 'Ciencia y universo',
      locutorPrincipal: { nickname: 'AstroGeek' },
      fecha: '2024-02-06',
      reproducciones: 1200,
      estado: 'Inactivo',
    },
    {
      id: 3,
      temaGeneral: 'Música y cultura',
      locutorPrincipal: { nickname: 'MusicLover' },
      fecha: '2024-02-05',
      reproducciones: 900,
      estado: 'Pendiente',
    },
  ];

  constructor(private router: Router) {}

  verDetalles(id: number) {
  }

  eliminarPodcast(index: number) {

}
}