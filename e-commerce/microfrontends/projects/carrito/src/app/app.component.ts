import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartItem } from './models/cart-item.model';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CommonModule,
           CartListComponent,
           CartSummaryComponent, 
           CartEmptyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Camiseta',
      price: 59000,
      quantity: 2,
      image: 'assets/images/camiseta.jpg'
    },
    {
      id: 2,
      name: 'Jeans',
      price: 129000,
      quantity: 1,
      image: 'assets/images/jeans.jpg'
    }
  ];
}
