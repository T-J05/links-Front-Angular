import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import api from './api';

@Injectable({
  providedIn: 'root',
})
export class DetailsDataService {
  private apiUrl = api.getLinkById; // Ajusta la URL de tu método de la API

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los detalles de un enlace por su ID.
   * @param enlaceId ID del enlace.
   */
  getEnlaceById(enlaceId: number): Observable<any> {
    const url = `${this.apiUrl}${enlaceId}`; // Construye la URL con el ID
    return this.http.get<{ enlace: any }>(url).pipe(
      map((response) => {
        // Mapea y completa los campos faltantes con mensajes predeterminados
        const enlace = response.enlace || {};

        return {
          id: enlace.id || -1,
          url: enlace.url || 'URL no disponible',
          titulo: enlace.titulo || 'Título no disponible',
          descripcion: enlace.descripcion || 'Descripción no disponible',
          fechaCreacion: enlace.fechaCreacion || 'Fecha no disponible',
          votos: enlace.votos ?? 0,
          etiquetas: enlace.etiquetas?.length > 0 ? enlace.etiquetas : [{ nombre: 'Sin etiquetas' }],
          comentarios: enlace.comentarios?.length > 0
            ? enlace.comentarios.map((comentario: any) => ({
                id: comentario.id || -1,
                contenido: comentario.contenido || 'Comentario vacío',
                fechaComentario: comentario.fechaComentario || 'Fecha no disponible',
                enlaceId: comentario.enlaceId || 'ID de enlace no disponible',
                usuarioId: comentario.usuarioId || 'ID de usuario no disponible',
              }))
            : [{ contenido: 'Sin comentarios disponibles' }],
        };
      }),
      catchError((error) => {
        console.error('Error al obtener el enlace:', error);
        throw new Error('No se pudo obtener los detalles del enlace.'); // O devuelve un valor predeterminado si lo prefieres
      })
    );
  }
}
