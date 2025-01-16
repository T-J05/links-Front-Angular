import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-list', // Etiqueta para usar este componente
  templateUrl: './links-list.component.html', // Archivo HTML asociado
  standalone: true,
})
export class Links implements OnInit {
  mensaje: string = ''; // Declaramos una propiedad para almacenar el mensaje

  constructor() {
    // Constructor vacío
  }

  ngOnInit(): void {
    const resultado = this.holaMundo();
    this.mensaje = resultado.hola; // Asignamos el valor al mensaje
  }

  holaMundo() {
    return {
      hola: 'hola mundo', // Devuelve un objeto con la clave "hola".
    };
  }
}
