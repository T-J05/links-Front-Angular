// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Arranca la aplicación Angular utilizando AppComponent y la configuración
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
