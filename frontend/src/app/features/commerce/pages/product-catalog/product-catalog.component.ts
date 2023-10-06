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

  pageProducts: PageRequest | undefined;
  products: ProductDto[] = [];

  constructor(
    private productService: ProductCatalogService
  ) {
  }

  ngOnInit(): void {
    this.listarTodos(12, 0, '');
  }

  listarTodos(size: number, page: number, product: string) {
    this.productService.findAllpaged(size, page, 'name', product).subscribe(resp => {
      this.pageProducts = resp;
      this.products = resp.content;
    });
  }

  findProduct(product: string) {
    this.listarTodos(12, 0, product);
  }

  loadMore(page: number) {
    this.productService.findAllpaged(12, ++page, 'name', '').subscribe(resp => {
      this.pageProducts = resp;
      this.products.push(...resp.content);
    });
  }

}
