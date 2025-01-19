import { Routes } from '@angular/router';
import { EnlacesComponent } from './components/links-list/links-list.component';
import { FilterLinksComponent } from './components/FilterLinks/FilterLinks.component';
import { DetailsComponent } from './components/Details/DetailsLinks.component';
import { AddLinksComponent } from './components/AddLink/AddLink.component';

export const AppRoutes: Routes = [
  { path: '', component: EnlacesComponent }, // Ruta raíz
  {path: "filtro/:id", component: FilterLinksComponent},
  {path:"detalle/:id", component: DetailsComponent},
  {path: "crearEnlace", component: AddLinksComponent}
];
