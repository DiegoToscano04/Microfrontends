import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../models/cart-item.model';
@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  @Input() cartItems: CartItem[] = [];

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  increment(item: CartItem) {
    item.quantity++;
  }

  decrement(item: CartItem) {
    if (item.quantity > 1) item.quantity--;
  }

  remove(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }
}

