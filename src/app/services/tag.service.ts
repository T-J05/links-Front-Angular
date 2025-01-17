import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import api from './api';



@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {
  private apiUrl = api.Etiquetas; 

  constructor(private http: HttpClient) {}

  // Método para obtener etiquetas desde la API
  getEtiquetas(): Observable<{ nombre: string, id: number }[]> {
    return this.http.get<{ nombre: string, id: number }[]>(this.apiUrl);
  }
}

  