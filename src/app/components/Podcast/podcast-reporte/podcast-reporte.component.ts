import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../Shared/footer/footer.component';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';

@Component({
  selector: 'app-podcast-reporte',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './podcast-reporte.component.html',
})
export class PodcastReporteComponent {
  podcasts = [
    { id: 1, temaGeneral: 'Tecnología en el futuro', locutor: 'TechMaster', fecha: '2024-02-07', reproducciones: 1500 },
    { id: 2, temaGeneral: 'Ciencia y universo', locutor: 'AstroGeek', fecha: '2024-02-06', reproducciones: 1200 },
    { id: 3, temaGeneral: 'Música y cultura', locutor: 'MusicLover', fecha: '2024-02-05', reproducciones: 900 },
    { id: 4, temaGeneral: 'Historia y sociedad', locutor: 'HistoryFan', fecha: '2024-02-08', reproducciones: 1800 },
    { id: 5, temaGeneral: 'Negocios y economía', locutor: 'FinanceGuru', fecha: '2024-02-04', reproducciones: 1000 },
  ];

  podcastMasPopular = this.obtenerPodcastMasPopular();
  ordenActual: string = 'reproducciones';

  obtenerPodcastMasPopular() {
    return this.podcasts.reduce((max, podcast) => (podcast.reproducciones > max.reproducciones ? podcast : max), this.podcasts[0]);
  }

  ordenarPor(criterio: string) {

}
}
