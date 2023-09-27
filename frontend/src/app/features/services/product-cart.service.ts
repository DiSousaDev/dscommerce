import { Injectable } from '@angular/core';
import { Order } from "../../core/models/order.model";
import { OrderService } from "../../core/services/order.service";
import { Product } from "../../core/models/product.model";
import { ItemCart } from "../../core/models/item-cart.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  saveCart(cart: Order) {
    this.orderService.save(cart);
  }

  getCart() : Order {
    return this.orderService.get();
  }

  clearCart() {
    this.orderService.clear();
  }

  addProduct(product: Product) {
    const cart = this.orderService.get();
    const item = cart.items.find(x => x.productId === product.id);
    if(!item) {
      const newItem = new ItemCart(product.id, 1, product.name, product.price, product.imgUrl);
      cart.items.push(newItem);
      this.orderService.save(cart);
    }
  }

  increaseItem(id: number) {
    const order = this.orderService.get();
    const item = order.items.find(x => x.productId === id);

    if(item) {
      item.quantity++;
      this.orderService.save(order);
    }

  }

  decreaseItem(id: number) {
    const order = this.orderService.get();
    const item = order.items.find(x => x.productId === id);
    if(item && item.quantity > 1) {
      item.quantity--;
      this.orderService.save(order);
    }
  }

}
