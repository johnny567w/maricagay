import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';

@Component({
  selector: 'app-locutor-crear',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NavbarComponent],
  templateUrl: './locutor-crear.component.html',
})
export class LocutorCrearComponent {
  locutorForm: FormGroup;
  imagenPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.locutorForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', Validators.required],
      pais: ['', Validators.required],
      especialidad: ['', Validators.required],
      imagen: [null, Validators.required],
    });
  }

  onFileChange(event: any) {

  }

  submit() {

}
}
