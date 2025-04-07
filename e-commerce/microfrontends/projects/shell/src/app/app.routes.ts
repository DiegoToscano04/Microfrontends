import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'carrito-app',
    loadComponent: () =>
      import('carrito-mfe/AppComponent').then((m) => m.AppComponent),
  },
];
