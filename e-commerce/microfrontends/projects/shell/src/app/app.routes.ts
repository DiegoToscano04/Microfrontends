import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'carrito-app',
    loadComponent: () =>
      import('carrito-mfe/AppComponent').then((m) => m.AppComponent),
  },
];
