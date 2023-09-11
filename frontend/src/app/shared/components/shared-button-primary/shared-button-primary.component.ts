import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button-primary',
  templateUrl: './shared-button-primary.component.html',
  styleUrls: ['./shared-button-primary.component.css']
})
export class SharedButtonPrimaryComponent {

  @Input({ required: true }) title?: string;

}
