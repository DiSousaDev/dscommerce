import { Component, OnInit } from '@angular/core';
import { ItemCart } from "../../../../core/models/item-cart.model";
import { Order } from "../../../../core/models/order.model";
import { ProductCartService } from "../../../services/product-cart.service";

const item1 = new ItemCart(4,1,"PC Gamer", 1200, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg");
const item2 = new ItemCart(5,2, "Rails for Dummies", 100.99, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg");

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  itens: ItemCart[] = [];
  order: Order = new Order();

  btnFinalizar = "Finalizar pedido";
  btnContinuar = "Continuar comprando";
  btnLimpar = "Limpar carrinho";

  constructor(
    private productCartService: ProductCartService
  ) {
  }

  ngOnInit(): void {
    this.order = this.getCart();
    // this.saveCart(this.order);
  }

  saveCart(cart: Order) {
    this.itens.push(item1);
    this.itens.push(item2);
    this.order.id = 1;
    this.order.items = this.itens;
    this.productCartService.saveCart(cart);
  }

  getCart() : Order {
    return this.productCartService.getCart();
  }

  clearCart() {
    this.productCartService.clearCart();
  }

  increaseItem(id: number) {
    this.productCartService.increaseItem(id);
    this.order = this.getCart();

  }

  decreaseItem(id: number) {
    this.productCartService.decreaseItem(id);
    this.order = this.getCart();
  }


}
