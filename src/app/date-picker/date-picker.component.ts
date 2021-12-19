import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  @Input() public value?: string | null;
  @Input() public label = '';

  @Input() public errorMessage = '';
  @Input() public displayError = false;
  @Input() public isSelected = true;

  @Output() public selectedDate = new EventEmitter<string>();

  constructor() { }

  getDate(value: string) {
    this.selectedDate.emit(value)
  }
}
