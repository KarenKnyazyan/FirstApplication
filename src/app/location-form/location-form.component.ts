import { Component, OnInit } from '@angular/core';
import {TableData} from "../../models/table-data.model";
import {ProjectLocationModel} from "../../models/project-location.model";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {

  locationTable: TableData<ProjectLocationModel> = new TableData<ProjectLocationModel>()

  displayProjectLocationsPopup: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
