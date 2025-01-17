import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import api from './api';



@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {
  private apiUrl = api.Etiquetas; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  getEtiquetas(): Observable<{ etiquetas: { id: number, nombre: string }[] }> {
    return this.http.get<{ etiquetas: { id: number, nombre: string }[] }>(this.apiUrl);
  }
}

