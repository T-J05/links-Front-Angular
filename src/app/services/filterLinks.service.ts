import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api';

@Injectable({
  providedIn: 'root'
})
export class FilterLinksService {
  private apiUrl = api.getLinksByTag; // Ajusta la URL de tu método de la API

  constructor(private http: HttpClient) {}

  /**
   * Filtra los enlaces según un ID de etiqueta.
   * @param tagId ID de la etiqueta por la que se desea filtrar.
   */
  getEnlacesByTag(tagId: number): Observable<{ id: number, titulo: string, etiqueta: string, url: string }[]> {
    const url = `${this.apiUrl}${tagId}`; // Construye la URL con el ID
    return this.http.get<{ enlaces: any[] }>(url).pipe(
      map(response => response.enlaces.map(enlace => ({
        id: enlace.id,
        titulo: enlace.titulo,
        etiqueta: enlace.etiquetas[0]?.nombre || 'Sin etiqueta',
        url: enlace.url
      })))
    );
  }
}
