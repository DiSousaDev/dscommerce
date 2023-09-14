import { Component } from '@angular/core';
import { Product } from "../../../../core/models/product.model";
import { ProductCatalogService } from "../../../services/product-catalog.service";
import { ActivatedRoute } from "@angular/router";
import { ProductDto } from "../../../../core/models/product-dto.model";

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  btnComprar = "Comprar";
  btnInicio = "Início";

  product!: Product;
  products: ProductDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductCatalogService
  ) {
  }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    let id = this.route.snapshot.params['id'];
   this.productService.findById(id).subscribe(prod => this.product = prod);
   this.productService.findAll().subscribe(resp => this.products = resp.content);
  }

}
