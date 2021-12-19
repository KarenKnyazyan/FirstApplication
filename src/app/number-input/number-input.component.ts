import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableData} from "../../models/table-data.model";

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent {

  @Input() public value?: number;
  @Input() public label = '';
  @Input() public errorMessage = '';
  @Input() public tableData: TableData<any> = new TableData<any>()

  @Input() public withLabel = false;
  @Input() public withoutLabel = false;
  @Input() public withCustomError = false;

  @Output() percent = new EventEmitter<[number, boolean]>()

  constructor() { }

  public percentValue?: number;
  isValidPercent = true
  public percentValidation(value: string) {
    this.percentValue = Number(value);
    this.isValidPercent = !((this.percentValue > 100 || this.percentValue <= 0) ||
      (this.tableData.getPercentSum() + this.percentValue) > 100 || (this.tableData.getPercentSum() + this.percentValue) <= 0);
    if (this.isValidPercent) {
      this.percent.emit([this.percentValue, this.isValidPercent]);
    } else {
      this.percent.emit([0, this.isValidPercent]);
    }
  }
}
