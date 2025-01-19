import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import api from './api';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = api.Comentar; // URL de tu API para comentarios

  constructor(private http: HttpClient) {}

  /**
   * Agrega un comentario a un enlace.
   * @param enlaceId ID del enlace donde se agregará el comentario.
   * @param contenido Contenido del comentario.
   */
  agregarComentario(enlaceId: number, contenido: string): Observable<any> {
    const url = `${this.apiUrl}`; // URL construida con el ID del enlace
    return this.http.post(url, { contenido ,enlaceId}); // Enviar el comentario en el body
  }
}
