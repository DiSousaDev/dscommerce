import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from "../../../services/product-catalog.service";
import { ProductDto } from "../../../../core/models/product-dto.model";
import { PageRequest } from "../../../../core/models/page-request.model";

@Component({
  selector: 'product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  productName: string = '';
  pageProducts: PageRequest | undefined;
  products: ProductDto[] = [];

  constructor(
    private productService: ProductCatalogService
  ) {
  }

  ngOnInit(): void {
    this.listarTodos(12, 0, this.productName);
  }

  listarTodos(size: number, page: number, product: string) {
    this.productService.findAllpaged(size, page, 'name', product).subscribe(resp => {
      this.pageProducts = resp;
      this.products = resp.content;
    });
  }

  findProduct(product: string) {
    this.productName = product;
    this.listarTodos(12, 0, this.productName);
  }

  loadMore(page: number) {
    this.productService.findAllpaged(12, ++page, 'name', this.productName).subscribe(resp => {
      this.pageProducts = resp;
      this.products.push(...resp.content);
    });
  }

}
