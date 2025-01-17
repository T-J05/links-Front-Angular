import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EtiquetaService } from '../../services/tag.service';
import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],  // Si estás utilizando `routerLink`, debes incluir `RouterModule`
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrarFiltro = false;  // Controla si se muestra el nav secundario
  etiquetas: { nombre: string, id: number }[] = [];  // Aquí usas la estructura correcta

  constructor(private router: Router, private etiquetaService: EtiquetaService) {
    // Escucha los cambios de ruta para decidir si mostrar el filtro
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarFiltro = event.url === '/filtro/:id' || event.url === '/';
      }
    });
  }

  ngOnInit(): void {
    this.obtenerEtiquetas();
  }

  obtenerEtiquetas(): void {
    this.etiquetaService.getEtiquetas().subscribe(
      (etiquetas) => {
        this.etiquetas = etiquetas;
      },
      error => {
        console.error('Error al cargar etiquetas:', error);
      }
    );
  }

  filtrarPorEtiqueta(etiqueta: string): void {
    console.log(`Filtrando por: ${etiqueta}`);
    // Implementa la lógica del filtro aquí
  }
}
