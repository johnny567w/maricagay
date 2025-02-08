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
    path: 'podcast/detalle/:id',
    loadComponent: () =>
      import('./components/Podcast/podcast-detalle/podcast-detalle.component').then((m) => m.PodcastDetalleComponent),
  },
  {
    path: 'podcast/crear',
    loadComponent: () =>
      import('./components/Podcast/podcast-crear/podcast-crear.component').then((m) => m.PodcastCrearComponent),
  },
  {
    path: 'podcast/reporte',
    loadComponent: () =>
      import('./components/Podcast/podcast-reporte/podcast-reporte.component').then((m) => m.PodcastReporteComponent),
  },

  {
    path: 'locutor/listar',
    loadComponent: () =>
      import('./components/Locutor/locutor-listar/locutor-listar.component').then((m) => m.LocutorListarComponent),
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },
];
