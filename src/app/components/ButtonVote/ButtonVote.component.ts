import { Component, Input } from '@angular/core';
import { ButtonVoteService } from '../../services/buttonVote.service';
// import { ButtonVoteService } from './button-vote.service';

@Component({
  selector: 'app-button-vote',
  standalone: true,
  templateUrl: './ButtonVote.component.html'

})
export class ButtonVoteComponent {
  @Input() enlaceId: number | undefined; // Recibe el ID del enlace para votar
  votos: number = 0;  // Número de votos, por defecto es 0

  constructor(private voteService: ButtonVoteService) {}

  /**
   * Llama al servicio para sumar un voto al enlace con el ID dado
   */
  votar(): void {
    if (this.enlaceId) {
      this.voteService.sumarVotos(this.enlaceId).subscribe(
        (response) => {
          // Actualiza el número de votos cuando se recibe la respuesta
          this.votos = response.votos;
          console.log('Voto sumado correctamente', response);
        },
        (error) => {
          console.error('Error al sumar voto', error);
        }
      );
    }
  }
}
