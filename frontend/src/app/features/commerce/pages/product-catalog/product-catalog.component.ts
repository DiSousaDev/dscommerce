import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from "../../../services/product-catalog.service";
import { ProductDto } from "../../../../core/models/product-dto.model";

@Component({
  selector: 'product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  products: ProductDto[] = [];

  constructor(
    private productService: ProductCatalogService
  ) {
  }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
   this.productService.findAll().subscribe(resp => this.products = resp.content);
  }

}
