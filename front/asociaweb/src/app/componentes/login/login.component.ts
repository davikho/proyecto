import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para redireccionar

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corregido `styleUrl` a `styleUrls`
})
export class LoginComponent {
  usuario = {
    nombre: '',
    contrasena: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Verificar si el nombre de usuario y la contraseña son correctos
    if (this.usuario.nombre === 'admin' && this.usuario.contrasena === 'admin') {
      // Almacenar el token en localStorage para indicar que el usuario está autenticado
      localStorage.setItem('userToken', 'admin-token');
      
      alert('Ingreso exitoso');
      this.router.navigate(['admin/inicio']); // Redirigir al componente admin
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
