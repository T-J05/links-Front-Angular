import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsDataService } from '../../services/detailsLinks.service';
import { ButtonVoteComponent } from "../ButtonVote/ButtonVote.component";
import { AddCommentComponent } from '../AddComment/AddComment.component';

@Component({
  standalone: true,
  selector: 'app-detailsData',
  imports: [RouterModule, CommonModule, ButtonVoteComponent,AddCommentComponent],
  templateUrl: './DetailsData.component.html',
  providers: [DetailsDataService],
})
export class DetailsDataComponent implements OnInit {
  enlace: any = null; // Cambiado de array a objeto

  constructor(private route: ActivatedRoute, private detailsDataService: DetailsDataService) {}

  ngOnInit() {
    // Escucha cambios en el parámetro 'id'
    this.route.params.subscribe((params) => {
      const enlaceId = +params['id']; // Obtiene el 'id' desde la URL
      if (!isNaN(enlaceId)) {
        this.detailsDataService.getEnlaceById(enlaceId).subscribe(
          (enlace) => {
            this.enlace = enlace; // Almacena el enlace único
          },
          (error) => {
            console.error('Error al cargar el enlace:', error);
          }
        );
      }
      
    });
    
  }
  actualizarComentarios(comentariosActualizados: any[]) {
    this.enlace.comentarios.push(comentariosActualizados); // Actualizar la lista de comentarios
  }

  trackByUniqueKey(index: number, item: any): number {
    return item.id; // Aquí aseguramos que la clave es única para cada elemento
  }
  
  
}
