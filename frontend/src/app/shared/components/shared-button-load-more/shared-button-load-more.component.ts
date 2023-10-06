import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button-load-more',
  templateUrl: './shared-button-load-more.component.html',
  styleUrls: ['./shared-button-load-more.component.css']
})
export class SharedButtonLoadMoreComponent {

  @Input() hasMoreProducts: boolean = false;

}
