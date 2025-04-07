import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
