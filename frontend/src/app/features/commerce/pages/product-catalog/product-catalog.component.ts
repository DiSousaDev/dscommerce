import { Component } from '@angular/core';
import { Product } from "../../../../core/models/product.model";

@Component({
  selector: 'product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent {

  product: Product = {
    id: 1,
    name: "Smart Tv",
    description: "Excelente televisor lançamento!",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources-devsuperior/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
      {
        id: 2,
        name: "Eletrônicos"
      },
      {
        id: 3,
        name: "Computadores"
      },
      {
        id: 4,
        name: "Importados"
      }
    ]
  }

}
