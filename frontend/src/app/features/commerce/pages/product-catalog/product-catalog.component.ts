import { Component, OnInit } from '@angular/core';
import { Product } from "../../../../core/models/product.model";
import { ProductCatalogService } from "../../../services/product-catalog.service";

@Component({
  selector: 'product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductCatalogService
  ) {
  }

  ngOnInit(): void {
    this.products = this.listarTodos();
  }

  listarTodos(): Product[] {
    return this.productService.findAll();
  }

}
