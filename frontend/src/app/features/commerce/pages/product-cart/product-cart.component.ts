import { Component, OnInit } from '@angular/core';
import { ItemCart } from "../../../../core/models/item-cart.model";

const cart = {
  items: [
    {
      productId: 4,
      quantity: 1,
      name: "PC Gamer",
      price: 1200,
      imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
    },
    {
      productId: 5,
      quantity: 2,
      name: "Rails for Dummies",
      price: 100.99,
      imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
    }
  ]
}

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  itens: ItemCart[] = [];

  btnFinalizar = "Finalizar pedido";
  btnContinuar = "Continuar comprando";

  ngOnInit(): void {
    this.itens = cart.items;
  }

}
