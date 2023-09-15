import { Component, Input } from '@angular/core';
import { ItemCart } from "../../../../core/models/item-cart.model";

@Component({
  selector: 'product-cart-card',
  templateUrl: './product-cart-card.component.html',
  styleUrls: ['./product-cart-card.component.css']
})
export class ProductCartCardComponent {

  @Input({required: true}) item!: ItemCart;

}
