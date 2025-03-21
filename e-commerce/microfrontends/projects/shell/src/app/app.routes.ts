import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component:NavbarComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];