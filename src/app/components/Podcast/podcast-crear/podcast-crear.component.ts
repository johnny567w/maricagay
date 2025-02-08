import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';

@Component({
  selector: 'app-podcast-crear',
  standalone: true,
  imports: [NavbarComponent,CommonModule, ReactiveFormsModule], // 🚀 Importar ReactiveFormsModule aquí
  templateUrl: './podcast-crear.component.html',
})
export class PodcastCrearComponent {




  agregarLocutor() {

  }

  eliminarLocutor(index: number) {
  }

  onFileChange(event: any) {

  }

  submit() {

  }
}
