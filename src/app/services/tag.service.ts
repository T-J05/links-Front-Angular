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
  getEtiquetas(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
export class EnlaceService {
    private apiUrl = api.Etiquetas; 
  
    constructor(private http: HttpClient) {}
  
    // Método para obtener etiquetas desde la API
    getEtiquetas(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl);
    }
  }
  