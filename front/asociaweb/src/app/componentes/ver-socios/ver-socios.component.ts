import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../servicios/registro.service';

@Component({
  selector: 'app-ver-socios',
  templateUrl: './ver-socios.component.html',
  styleUrls: ['./ver-socios.component.scss']
})
export class VerSociosComponent implements OnInit {

  socios: any[] = [];
  estadisticas: any = {};
  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.obtenerSocios();
    this.estadistics();
   
  }
estadistics(){
  this.registroService.obtenerEstadisticas().subscribe((data) => {
    this.estadisticas = data;
  });
}
  // Obtener la lista de socios
  obtenerSocios(): void {
    this.registroService.obtenerSocios().subscribe({
      next: (socios) => {
        this.socios = socios;
      },
      error: (error) => {
        console.error('Error al obtener socios', error);
      }
    });
  }

  // Guardar los cambios del socio
  guardarCambios(socio: any): void {
    const confirmacion = confirm('¿Estás seguro de guardar los cambios?');

    if (confirmacion) {
      this.registroService.actualizarSocio(socio.id, socio).subscribe({
        next: () => {
          console.log('Cambios guardados');
          this.estadistics()
        },
        error: (error) => {
          console.error('Error al guardar cambios', error);
          alert('Hubo un error al guardar los cambios.');
        }
      });
    } else {
      this.obtenerSocios();
      console.log('Cambios no guardados');
    }
  }

  // Actualizar el estado de un socio
  actualizarEstado(id: number, nuevoEstado: string): void {
    const confirmacion = confirm(`¿Estás seguro de cambiar el estado a ${nuevoEstado}?`);
    
    if (confirmacion) {
      // Encontramos el socio en la lista para actualizar su estado
      const socio = this.socios.find(s => s.id === id);
      if (socio) {
        socio.estado = nuevoEstado;

        // Enviamos la solicitud para actualizar el estado en el backend
        this.registroService.actualizarEstadoSocio(id, nuevoEstado).subscribe({
          next: () => {
            console.log(`Estado actualizado a ${nuevoEstado}`);
          },
          error: (error) => {
            console.error('Error al actualizar estado', error);
            alert('Hubo un error al actualizar el estado.');
          }
        });
      }
    } else {
      console.log('Cambio de estado cancelado');
    }
  }

  // Eliminar un socio
  eliminarSocio(id: number): void {
    const confirmacion = confirm('¿Estás seguro de eliminar este socio?');
    if (confirmacion) {
      this.registroService.eliminarSocio(id).subscribe({
        next: () => {
          this.socios = this.socios.filter(socio => socio.id !== id);
          console.log('Socio eliminado');
          this.estadistics()
        },
        error: (error) => {
          console.error('Error al eliminar socio', error);
          alert('Hubo un error al eliminar el socio.');
        }
      });
    }
  }
}
