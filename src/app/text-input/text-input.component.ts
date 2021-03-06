import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {

  @Input() public label = '';
  @Input() public displayDescription = false;

  constructor() { }
}
