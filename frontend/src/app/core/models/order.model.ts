import { ItemCart } from "./item-cart.model";

export class Order {

  id?: number;
  items: ItemCart[] = [];

  get total(): number {
    let sum = 0;
    this.items.forEach(item => {
      sum += item.subTotal;
    });
    return sum;
  }

}
