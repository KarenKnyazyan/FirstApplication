import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableData} from "../../models/table-data.model";
import {DropdownValidationService} from "../../shared/services/dropdown-validation.service";
import {SelectModel} from "../../models/select.model";

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent {

  @Input() public dropdownData: SelectModel[] = [{id: 1, value: "-Select-"}];
  @Input() public tableData: TableData<any> = new TableData<any>();
  @Input() public label = '';
  @Input() public errorMessage = '';
  @Input() public selectedValue?: number;
  @Output() selectedValueChange = new EventEmitter<[string, boolean]>();

  constructor(private validator: DropdownValidationService) {
    console.log(this.selectedValue)
  }

  public isValidDropdown = true;
  public dropdownValidation(value: string): void {
    this.isValidDropdown = this.validator.dropdownValidation(value, this.tableData);
    if (this.isValidDropdown) {
      this.selectedValueChange.emit([value, this.isValidDropdown]);
    } else {
      this.selectedValueChange.emit(['', this.isValidDropdown]);
    }
  }
}
