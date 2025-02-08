import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/Shared/inicio/inicio.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,InicioComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppBase';
}
