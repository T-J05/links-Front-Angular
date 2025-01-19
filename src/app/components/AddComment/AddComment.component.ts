import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommentService } from '../../services/commentService';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-comment',
  imports: [ FormsModule],
  templateUrl: './AddComment.component.html',
  providers: [CommentService]
})

export class AddCommentComponent {
  @Input() enlaceId!: number; // Recibir el ID del enlace como entrada
  @Output() comentarioAgregado = new EventEmitter<any>(); // Notificar al componente padre que se ha agregado un comentario

  contenido: string = '';

  constructor(private commentService: CommentService) {}

  enviarComentario() {
    if (this.contenido.trim()) {
      this.commentService.agregarComentario(this.enlaceId, this.contenido).subscribe(
        (response) => {
          console.log({"response":response})
          this.contenido = ''; // Limpiar el campo de texto
          this.comentarioAgregado.emit(response.comentario); // Emitir los comentarios actualizados
        },
        (error) => {
          console.error('Error al agregar comentario:', error);
        }
      );
    }
  }
}
