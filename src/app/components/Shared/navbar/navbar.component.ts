import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importa RouterModule para routerLink
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen: boolean = false; // Controla la visibilidad del menú en móviles
  podcastMenuOpen: boolean = false; // Controla la visibilidad del submenú Podcast
  locutorMenuOpen: boolean = false; // Controla la visibilidad del submenú Locutores

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.podcastMenuOpen = false;
      this.locutorMenuOpen = false;
    }
  }

  togglePodcastMenu() {
    this.podcastMenuOpen = !this.podcastMenuOpen;
    this.locutorMenuOpen = false; // Cierra el otro menú si está abierto
  }

  toggleLocutorMenu() {
    this.locutorMenuOpen = !this.locutorMenuOpen;
    this.podcastMenuOpen = false; // Cierra el otro menú si está abierto
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.menuOpen = false; // Cierra el menú después de hacer clic
    this.podcastMenuOpen = false;
    this.locutorMenuOpen = false;
  }
}
