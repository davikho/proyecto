import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('userToken') !== null; // Verificar si hay un token almacenado
  }

  // Método para iniciar sesión (simple ejemplo)
  login(token: string): void {
    localStorage.setItem('userToken', token);
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('userToken');
  }
}
