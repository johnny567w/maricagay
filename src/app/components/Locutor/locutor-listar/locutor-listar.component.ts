import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locutor-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locutor-listar.component.html',
})
export class LocutorListarComponent {
  locutores = [
    {
      id: 1,
      nombreCompleto: 'Carlos Mendoza',
      nickname: 'TechMaster',
      email: 'carlos@podcast.com',
      pais: 'México',
      especialidad: 'Tecnología',
      foto: 'https://source.unsplash.com/100x100/?portrait,man',
    },
    {
      id: 2,
      nombreCompleto: 'María López',
      nickname: 'AstroGeek',
      email: 'maria@podcast.com',
      pais: 'España',
      especialidad: 'Astronomía',
      foto: 'https://source.unsplash.com/100x100/?portrait,woman',
    },
    {
      id: 3,
      nombreCompleto: 'Javier Ríos',
      nickname: 'MusicLover',
      email: 'javier@podcast.com',
      pais: 'Argentina',
      especialidad: 'Música',
      foto: 'https://source.unsplash.com/100x100/?portrait,artist',
    },
  ];

  constructor(private router: Router) {}

  verDetalles(id: number) {
  }

  eliminarLocutor(index: number) {

}
}
