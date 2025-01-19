import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api';

export interface LinkBody {
  titulo: string;
  etiquetas: { nombre: string };
  url: string;
  descripcion: string;
}

export interface LinkResponse {
  id: number;
  titulo: string;
  votos: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddLinksService {
  private apiUrl = api.createLink;

  constructor(private http: HttpClient) {}

  addLink(body: LinkBody): Observable<LinkResponse | null> {  // Cambiar el tipo de retorno
    return this.http.post<any>(this.apiUrl, body).pipe(
      map(response => {
        // Aseguramos que la respuesta contiene la propiedad 'newLink'
        if (response && response.newLink) {
          const newLink = response.newLink;
          console.log(response)
          // Retornamos un objeto con los datos necesarios
          return {
            id: newLink.id,
            titulo: newLink.titulo,
            votos: newLink.votos, // Suponiendo que 'etiquetas' es un objeto con 'nombre'
            url: newLink.url
          };
        } else {
          console.error('La respuesta no contiene un nuevo enlace:', response);
          return null;  // Retornamos null si no se encuentra newLink
        }
      })
    );
  }
}
