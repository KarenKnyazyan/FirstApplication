import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {COUNTIES, DISTRICTS} from "../../assets/mock-data";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TableData} from "../../models/table-data.model";
import {ProjectLocationModel} from "../../models/project-location.model";

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.css']
})
export class LocationPopupComponent implements OnInit {

  public counties = COUNTIES;
  public districts = [{id: 1, value: "-Select-"}];
  public countyDistrictPercentData = {county: '', district: '', percent: 0};

  @Output() public nextTableRow = new EventEmitter<{county: string, district: string, percent: number}>();

  public locationTable: TableData<ProjectLocationModel> = new TableData<ProjectLocationModel>()
  public countyOrder = 1;
  public districtOrder = 1;

  public isValidCountyAndDistrict = false;
  public isValidPercent = false;
  public displayProjectLocationsPopup: Boolean = false;

  locationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      county: ['', Validators.required],
      district: ['', Validators.required],
      percent: ['', [Validators.max(100), Validators.min(1)]],
    });
  }

  @Output() public closePopup = new EventEmitter<boolean>()

  public addLocationTableRow(): void {
    this.nextTableRow.emit(this.countyDistrictPercentData);
  }

  public setDistrict(event: [string, boolean]): void {
    this.countyDistrictPercentData.district = event[0];
    this.isValidCountyAndDistrict = event[1];
  }

  public setPercent(event: [number, boolean]) {
    this.countyDistrictPercentData.percent = event[0];
    this.isValidPercent = event[1];
  }

  public filterDistricts(county: string): void {
    this.countyDistrictPercentData.county = county;
    this.districts = DISTRICTS.filter(x => x.parent === county)
  }
}
