import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []; // items property array to store the product

  addCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  constructor() {}
}