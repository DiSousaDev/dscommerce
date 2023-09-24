export class ItemCart {

  constructor(
    public productId: number,
    public quantity: number,
    public name: string,
    public price: number,
    public imgUrl: string
  ) {
  }

  get subTotal(): number {
    return this.price * this.quantity;
  }

}
