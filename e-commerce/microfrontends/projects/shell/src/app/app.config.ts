import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';



import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent } // Redirección inicial
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
