import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api';



@Injectable({
  providedIn: 'root'
})

export class FilterLinksService {
    private apiUrl = api.getLinksByTag;
    constructor(private http: HttpClient) {}
  
    getEnlaces(): Observable<{ id: number, titulo: string, etiqueta: string, url: string }[]> {
      return this.http.get<{ enlaces: any[] }>(this.apiUrl).pipe(
        map(response => response.enlaces.map(enlace => ({
          id: enlace.id,
          titulo: enlace.titulo,
          etiqueta: enlace.etiquetas[0]?.etiqueta.nombre || 'Sin etiqueta',
          url: enlace.url
        })))
      );
    }
  
  }