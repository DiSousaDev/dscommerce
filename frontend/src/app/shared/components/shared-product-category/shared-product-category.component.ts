import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-product-category',
  templateUrl: './shared-product-category.component.html',
  styleUrls: ['./shared-product-category.component.css']
})
export class SharedProductCategoryComponent {

  @Input({ required: true }) title?: string;

}
