import { IProduct } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: IProduct[] = [];
  constructor() { }
  addToCart(item: IProduct) {
    this.product.push(item);
  }
  getItems() {
    return this.product;
  }
}
