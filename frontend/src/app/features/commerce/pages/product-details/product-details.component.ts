import { Component } from '@angular/core';
import { Product } from "../../../../core/models/product.model";
import { ProductCatalogService } from "../../../services/product-catalog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductDto } from "../../../../core/models/product-dto.model";
import { ItemCart } from "../../../../core/models/item-cart.model";
import { OrderService } from "../../../services/order.service";

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
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    let id = this.route.snapshot.params['id'];
    this.productService.findById(id).subscribe(prod => this.product = prod);
    this.productService.findAll().subscribe(resp => this.products = resp.content);
  }

  addProduct(product: Product) {
    const cart = this.orderService.get();
    const item = cart.items.find(x => x.productId === product.id);
    if(!item) {
      const newItem = new ItemCart(product.id, 1, product.name, product.price, product.imgUrl);
      cart.items.push(newItem);
      this.orderService.save(cart);
    }
  }

  handleBuyClick(product: Product): void {
    this.addProduct(product);
    this.router.navigate(['/cart']);
  }

}
