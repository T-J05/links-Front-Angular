import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.compoment";
import { RouterModule } from "@angular/router";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, HeaderComponent],  // Agrega el HeaderComponent aquí
  template: `
    <app-header></app-header>
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
