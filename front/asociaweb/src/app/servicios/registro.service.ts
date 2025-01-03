import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://127.0.0.1:5000/socios'; // Base URL para todas las rutas

  constructor(private http: HttpClient) {}

  // Registrar un nuevo socio
  registrarSocio(socio: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, socio);
  }

  // Obtener todos los socios
  obtenerSocios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  // Obtener un socio específico por ID
  obtenerSocio(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/consultar/${id}`);
  }

  // Eliminar un socio por ID
  eliminarSocio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/eliminar/${id}`);
  }
}
