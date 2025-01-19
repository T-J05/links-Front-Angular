import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.compoment";
import { RouterModule } from "@angular/router"; // Importante para la navegación
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, HeaderComponent,MatSnackBarModule],  // Solo importa HeaderComponent, no FilterLinksComponent ni EnlacesComponent
  template: `
    <app-header></app-header>  <!-- Aquí tienes el Header -->
    <main>
      <router-outlet></router-outlet> <!-- El contenido será cargado aquí según las rutas -->
    </main>
  `
})
export class AppComponent {
  onNavigate(route: string){
    if (route === "home"){
      window.location.href = "/";
    }
  }
}
