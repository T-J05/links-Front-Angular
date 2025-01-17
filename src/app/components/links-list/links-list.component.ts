import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../../services/links.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-links-list', // Etiqueta para usar este componente
  templateUrl: './links-list.component.html', // Archivo HTML asociado
  imports: [RouterModule],
  standalone: true,
})

export class EnlacesComponent implements OnInit {
  enlaces: { id: number, titulo: string, etiqueta: string, url: string }[] = [];

  constructor(private enlacesService: EnlacesService) {}

  ngOnInit(): void {
    this.enlacesService.getEnlaces().subscribe(data => {
      this.enlaces = data;
    });
  }
}
