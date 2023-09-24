import { Injectable } from '@angular/core';
import { Order } from "../../core/models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }

  save(cart: Order) {
    const str = JSON.stringify(cart);
    localStorage.setItem("dscommerce/Cart", str);
  }

  get() : Order {
    const str = localStorage.getItem("dscommerce/Cart") || '{"items" = []}';
    return JSON.parse(str);
  }

}
