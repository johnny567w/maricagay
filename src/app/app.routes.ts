import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./components/Shared/inicio/inicio.component').then((m) => m.InicioComponent),
  },
  {
    path: 'podcast/list',
    loadComponent: () =>
      import('./components/Podcast/podcast-list/podcast-list.component').then((m) => m.PodcastListComponent),
  },

  {
    path: 'podcast/crear',
    loadComponent: () =>
      import('./components/Podcast/podcast-crear/podcast-crear.component').then((m) => m.PodcastCrearComponent),
  },

  {
    path: 'locutor/listar',
    loadComponent: () =>
      import('./components/Locutor/locutor-listar/locutor-listar.component').then((m) => m.LocutorListComponent),
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },
];
