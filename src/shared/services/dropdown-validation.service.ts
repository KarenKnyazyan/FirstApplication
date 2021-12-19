import {Injectable} from '@angular/core';
import {TableData} from "../../models/table-data.model";

@Injectable({
  providedIn: 'root'
})
export class DropdownValidationService {

  constructor() { }

  public dropdownValidation(value: string, tableData: TableData<any>): boolean {
    if (tableData.getData().length === 0) {
      return true;
    }
    if (tableData.getData()[0].parent === undefined) {
      return !tableData.getData().some(x => x.projectSector.value === value);
    }
    return !tableData.getData().some(x => x.county.value === value && x.district.some((y: { value: string; }) => y.value === value));
  }
}
