import { Component } from '@angular/core';
import {TableData} from "../../models/table-data.model";
import {ProjectLocationModel} from "../../models/project-location.model";
import {DropdownValidationService} from "../../shared/services/dropdown-validation.service";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent{

  public locationTable: TableData<ProjectLocationModel> = new TableData<ProjectLocationModel>()
  public displayProjectLocationsPopup: Boolean = false;
  public countyAndDistrictError = false;
  private rowId = 1;
  constructor(private validator: DropdownValidationService) { }

  public addLocationTableRow(event: {county: string, district: string, percent: number}): void {
    this.locationTable.add({
      county: event.county,
      district: event.district,
      percent: event.percent,
      id: this.rowId++
    }, event.percent)
  }

  public countyAndDistrictValidation(event: [string, string]): void  {
    this.countyAndDistrictError = !this.validator.dropdownValidation(event[1], this.locationTable, event[0]);
  }
}
