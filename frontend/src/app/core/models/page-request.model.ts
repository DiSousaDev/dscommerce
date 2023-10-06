import { ProductDto } from "./product-dto.model";

export class PageRequest {

  constructor(
    public content: ProductDto[],
    public last: boolean,
    public totalPages: number,
    public totalElements: number,
    public first: boolean,
    public size: number,
    public number: number,
    public numberOfElements: number,
    public empty: boolean
  ) {
  }

}
