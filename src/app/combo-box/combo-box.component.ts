import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableData} from "../../models/table-data.model";
import {DropdownValidationService} from "../../shared/services/dropdown-validation.service";

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent {

  @Input() public dropdownData: { id: number, value: string, parent?: string }[] = [{id: 1, value: "-Select-"}];
  @Input() public tableData: TableData<any> = new TableData<any>();
  @Input() public label = '';
  @Input() public errorMessage = '';

  @Output() selectedValue = new EventEmitter<[string, boolean]>();

  constructor(private validator: DropdownValidationService) { }

  public isValidDropdown = true;
  public dropdownValidation(value: string): void {
    this.isValidDropdown = this.validator.dropdownValidation(value, this.tableData);
    if (this.isValidDropdown) {
      this.selectedValue.emit([value, this.isValidDropdown]);
    } else {
      this.selectedValue.emit(['', this.isValidDropdown]);
    }
  }
}
