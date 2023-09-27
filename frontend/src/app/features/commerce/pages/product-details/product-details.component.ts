import { Component } from '@angular/core';
import { Product } from "../../../../core/models/product.model";
import { ProductCatalogService } from "../../../services/product-catalog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductDto } from "../../../../core/models/product-dto.model";
import { ProductCartService } from "../../../services/product-cart.service";

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
    private router: Router,
    private productService: ProductCatalogService,
    private productCartService: ProductCartService
  ) {
  }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    let id = this.route.snapshot.params['id'];
    this.productService.findById(id).subscribe(prod => this.product = prod);
    this.productService.findAll().subscribe(resp => this.products = resp.content);
  }

  handleBuyClick(product: Product): void {
    this.productCartService.addProduct(product);
    this.router.navigate(['/cart']);
  }


}
