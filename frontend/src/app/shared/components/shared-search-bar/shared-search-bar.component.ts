import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './shared-search-bar.component.html',
  styleUrls: ['./shared-search-bar.component.css']
})
export class SharedSearchBarComponent {

  @Output() itemSearch = new EventEmitter<string>();

  findProducts(event: any, value: string) {
    event.preventDefault();
    this.itemSearch.emit(value);
  }

  clearInput() {
    this.itemSearch.emit('');
  }

}
