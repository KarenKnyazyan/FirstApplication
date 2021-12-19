import {Injectable} from '@angular/core';
import {TableData} from "../../models/table-data.model";

@Injectable({
  providedIn: 'root'
})
export class DropdownValidationService {

  constructor() { }

  public dropdownValidation(value_1: string, tableData: TableData<any>, value_2?: string): boolean {
    if (tableData.getData().length === 0) {
      return true;
    }
    if (tableData.getData()[0].county === undefined) {
      return !tableData.getData().some(x => x.projectSector === value_1);
    }
    return !tableData.getData().some(x => x.county === value_2 && x.district === value_1);
  }
}
