import { Component } from '@angular/core';
import {TableData} from "../../models/table-data.model";
import {ProjectLocationModel} from "../../models/project-location.model";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent{

  public locationTable: TableData<ProjectLocationModel> = new TableData<ProjectLocationModel>()
  public displayProjectLocationsPopup: Boolean = false;

  private countyOrder = 1;
  private districtOrder = 1;
  constructor() { }

  public addLocationTableRow(event: {county: string, district: string, percent: number}): void {
    this.locationTable.add({
      county: event.county,
      district: event.district,
      percent: event.percent,
      countyOrder: this.countyOrder++,
      districtOrder: this.districtOrder++
    }, event.percent)
  }
}
