import { Component } from '@angular/core';
import { Product } from "../../../../core/models/product.model";
import { ProductCatalogService } from "../../../services/product-catalog.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  btnComprar = "Comprar";
  btnInicio = "Início";

  product!: Product;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductCatalogService
  ) {
  }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    let id = this.route.snapshot.params['id'];
    const res = this.productService.findById(id);
    if (res !== undefined) {
      this.product = res;
    } else {
      console.error("Produto não encontrado: id = " + id);
      this.router.navigate(['/products/catalog'])
    }
    this.products = this.productService.findAll();
  }

}
