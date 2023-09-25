import { Injectable } from '@angular/core';
import { Order } from "../../core/models/order.model";
import { environment } from "../../../environments/environment";
import { ItemCart } from "../../core/models/item-cart.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }

  save(cart: Order) {
    const str = JSON.stringify(cart);
    localStorage.setItem(environment.cartKey, str);
  }

  get() : Order {
    const str = localStorage.getItem(environment.cartKey) || '{"items":[]}';
    const obj = JSON.parse(str) as Order;

    const cart = new Order();
    obj.items.forEach(x => {
      cart.items.push(new ItemCart(x.productId, x.quantity, x.name, x.price, x.imgUrl));
    });
    return cart;
  }

  clear() {
    localStorage.setItem(environment.cartKey, '{"items":[]}');
  }

}
