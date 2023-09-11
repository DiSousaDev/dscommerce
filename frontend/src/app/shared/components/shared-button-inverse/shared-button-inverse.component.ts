import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button-inverse',
  templateUrl: './shared-button-inverse.component.html',
  styleUrls: ['./shared-button-inverse.component.css']
})
export class SharedButtonInverseComponent {

  @Input({ required: true }) title?: string;

}
