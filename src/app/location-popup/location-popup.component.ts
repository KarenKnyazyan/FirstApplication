import {Component, EventEmitter, Input, Output} from '@angular/core';
import {COUNTIES, DISTRICTS} from "../../assets/mock-data";

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.css']
})
export class LocationPopupComponent {

  public counties = COUNTIES;
  public districts = [{id: 1, value: "-Select-"}];
  public countyDistrictPercentData = {county: '', district: '', percent: 0};

  @Output() public nextTableRow = new EventEmitter<{county: string, district: string, percent: number}>();
  @Output() public closePopup = new EventEmitter<boolean>()
  @Output() public checkCountyAndDistrict = new EventEmitter<[string, string]>()

  public countyOrder = 1;
  public districtOrder = 1;

  @Input() public isValidCountyAndDistrict = true;
  public isValidPercent = false;
  public displayProjectLocationsPopup: Boolean = false;

  constructor() {}

  public addLocationTableRow(): void {
    this.nextTableRow.emit(this.countyDistrictPercentData);
  }

  public setDistrict(event: [string, boolean]): void {
    this.countyDistrictPercentData.district = event[0];
    this.checkCountyAndDistrict.emit([this.countyDistrictPercentData.county, event[0]]);
  }

  public setPercent(event: [number, boolean]) {
    this.countyDistrictPercentData.percent = event[0];
    this.isValidPercent = event[1];
  }

  public filterDistricts(county: string): void {
    this.countyDistrictPercentData.county = county;
    this.districts = DISTRICTS.filter(x => x.parent === county);
  }
}
