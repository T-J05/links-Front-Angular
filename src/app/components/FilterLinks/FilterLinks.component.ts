import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FilterLinksService } from '../../services/filterLinks.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-links',
  imports: [RouterModule,CommonModule],
  templateUrl: './FilterLinks.component.html',
  providers: [FilterLinksService]
})
export class FilterLinksComponent implements OnInit {
  enlaces: any[] = [];

  constructor(private route: ActivatedRoute, private filterLinksService: FilterLinksService) {}

  ngOnInit() {
    // Escucha cambios en el parámetro 'id'
    this.route.params.subscribe(params => {
      const tagId = +params['id']; // Obtiene el 'id' desde la URL
      if (!isNaN(tagId)) {
        this.filterLinksService.getEnlacesByTag(tagId).subscribe(enlaces => {
          this.enlaces = enlaces; // Almacena los enlaces filtrados
        });
      }
    });
  }
}
