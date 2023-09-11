import { Component, Input } from '@angular/core';
import { Product } from "../../../../core/models/product.model";

@Component({
  selector: 'product-catalog-card',
  templateUrl: './product-catalog-card.component.html',
  styleUrls: ['./product-catalog-card.component.css']
})
export class ProductCatalogCardComponent {

  @Input({ required: true }) product!:Product;

}
