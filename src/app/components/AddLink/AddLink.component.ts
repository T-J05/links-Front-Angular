import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { EtiquetaService } from "../../services/tag.service";
import { AddLinksService } from "../../services/addNewLink.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-form-link',
    templateUrl: "./AddLink.component.html",
    imports: [ReactiveFormsModule],
    providers: [EtiquetaService, AddLinksService]
})
export class AddLinksComponent implements OnInit {
    AddLinkForm: FormGroup;
    url: FormControl;
    titulo: FormControl;
    etiquetass: FormControl;
    descripcion: FormControl;
    etiquetasD: { nombre: string }[] = [];

    constructor(
        private etiquetaService: EtiquetaService,
        private addLinksService: AddLinksService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        this.url = new FormControl('');
        this.titulo = new FormControl('');
        this.etiquetass = new FormControl('');
        this.descripcion = new FormControl('');
        this.AddLinkForm = new FormGroup({
            url: this.url,
            titulo: this.titulo,
            etiquetas: this.etiquetass,
            descripcion: this.descripcion,
        });
    }

    ngOnInit(): void {
        this.getEtiquetas();
    }

    getEtiquetas() {
        this.etiquetaService.getEtiquetas().subscribe({
            next: (data) => {
                // Accede al array 'etiquetas' dentro de la respuesta
                if (data && Array.isArray(data.etiquetas)) {
                    this.etiquetasD = data.etiquetas;
                } else {
                    console.error('Los datos no contienen un array de etiquetas.');
                }
            },
            error: (err) => {
                console.error('Error al obtener las etiquetas:', err);
            }
        });
    }

    enviarFormulario() {
        // Obtener los valores originales del formulario
        const formularioDatos = this.AddLinkForm.getRawValue();

        // Transformar las etiquetas al formato requerido
        const datosTransformados = {
            ...formularioDatos,
            etiquetas: { nombre: formularioDatos.etiquetas } // Transformar etiquetas
        };

        console.log("Datos transformados para enviar al servicio:", datosTransformados);

        // Llamar al servicio para enviar los datos
        this.enviarAlServicio(datosTransformados);
    }

    enviarAlServicio(datos: any) {
        this.addLinksService.addLink(datos).subscribe({
            next: () => {
                // Mostrar un mensaje de éxito al usuario
                this.snackBar.open('Enlace creado con éxito!', 'Cerrar', {
                    duration: 3000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['snack-bar-success'],
                });

                // Redirigir al usuario a la página principal después de 3 segundos
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 1500);
            },
            error: (err) => {
                // Mostrar un mensaje de error al usuario si ocurre un problema
                console.log(err)
                this.snackBar.open('Error al crear el enlace. Intenta nuevamente.', 'Cerrar', {
                    duration: 3000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['snack-bar-error'],
                });
            }
        });
    }
}
