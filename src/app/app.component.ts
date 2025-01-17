import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.compoment";
import { RouterModule } from "@angular/router";
import { EnlacesComponent } from "./components/links-list/links-list.component";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, HeaderComponent, EnlacesComponent],  // Agrega el HeaderComponent aquí
  template: `
    <app-header></app-header>
    <app-links-list></app-links-list>
    <main>
      <router-outlet></router-outlet>
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
