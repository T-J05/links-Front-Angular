import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api';  // Asegúrate de que api tenga la URL correcta

@Injectable({
  providedIn: 'root'
})
export class ButtonVoteService {
  private apiUrl = api.SumarVotos;  // Asegúrate de que la URL de la API esté correctamente configurada

  constructor(private http: HttpClient) {}

  /**
   * Envía un voto para un enlace específico y recibe los detalles del enlace con los votos actualizados.
   * @param enlaceId ID del enlace que será votado.
   */
  sumarVotos(enlaceId: number): Observable<{ id: number, titulo: string, url: string, votos: number }> {
    // Construye la URL con el ID del enlace
    const url = `${this.apiUrl}${enlaceId}`;  // Asegúrate de que la API está esperando este formato

    return this.http.patch<{ success: string, enlace: { id: number, titulo: string, url: string, votos: number } }>(url, null).pipe(
      map(response => {
        // Si necesitas manejar el mensaje de éxito, puedes acceder a response.success
        console.log(response.success); // Si necesitas mostrarlo o usarlo

        // Retorna el objeto `enlace` con los datos actualizados
        return {
          id: response.enlace.id,
          titulo: response.enlace.titulo,
          url: response.enlace.url,
          votos: response.enlace.votos
        };
      })
    );
  }
}
