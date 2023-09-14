import { Component, Input } from '@angular/core';
import { Product } from "../../../../core/models/product.model";

@Component({
  selector: 'product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.css']
})
export class ProductDetailsCardComponent {

  @Input({ required: true }) product!: Product;

}
