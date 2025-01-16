import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { EtiquetaService } from '../../services/tag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrarFiltro = false; // Controla si se muestra el nav secundario
  etiquetas: string[] = []; // Almacenará las etiquetas obtenidas de la API

  constructor(private router: Router, private etiquetaService: EtiquetaService) {
    // Escucha los cambios de ruta para decidir si mostrar el filtro
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarFiltro = event.url === '/crearEnlace' || event.url === '/';
      }
    });
  }

  ngOnInit(): void {
    this.obtenerEtiquetas();
  }

  // Llama al servicio para obtener las etiquetas desde la API
  obtenerEtiquetas(): void {
    this.etiquetaService.getEtiquetas().subscribe(
      (etiquetas: string[]) => {
        this.etiquetas = etiquetas;
      },
      error => {
        console.error('Error al cargar etiquetas:', error);
      }
    );
  }

  filtrarPorEtiqueta(etiqueta: string): void {
    console.log(`Filtrando por: ${etiqueta}`);
    // Implementa la lógica del filtro aquí (enviar datos al componente principal o servicio)
  }
}
