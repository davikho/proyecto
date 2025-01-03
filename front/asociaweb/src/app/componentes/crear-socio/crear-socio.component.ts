import { Component } from '@angular/core';
import { RegistroService } from '../../servicios/registro.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-socio',
  templateUrl: './crear-socio.component.html',
  styleUrl: './crear-socio.component.scss'
})
export class CrearSocioComponent {
  socio = {
    nombre: '',
    direccion: '',
    correo: '',
    telefono: ''
  };

  constructor(private registroService: RegistroService) {}

  onSubmit(): void {
    // Llamar al servicio para enviar datos al backend
    this.registroService.registrarSocio(this.socio).subscribe({
      next: (response) => {
        alert('Socio registrado exitosamente.');
        console.log(response);
        // Limpiar el formulario después del éxito
        this.socio = {
          nombre: '',
          direccion: '',
          correo: '',
          telefono: ''
        };
      },
      error: (error) => {
        // Verificar si el error es por correo duplicado
        if (error.status === 400 && error.error.error === 'El correo electrónico ya está registrado') {
          alert('El correo electrónico ya está registrado.');
        } else {
          alert('Error al registrar socio.');
        }
        console.error(error);
      }
    });
  }
  
}
