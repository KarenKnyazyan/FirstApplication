import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {COUNTIES} from "../../assets/mock-data";
import {FormBuilder,FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {TableData} from "../../models/table-data.model";
import {ProjectLocationModel} from "../../models/project-location.model";

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.css']
})
export class LocationPopupComponent implements OnInit {

  countries = COUNTIES;
  districts = [{id: 1, value: "-Select-"}]

  locationTable: TableData<ProjectLocationModel> = new TableData<ProjectLocationModel>()
  countyOrder = 1;
  districtOrder = 1;

  displayProjectLocationsPopup: Boolean = false;

  locationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      county: ['', Validators.required],
      district: ['', Validators.required],
      percent: ['', [Validators.max(100), Validators.min(1)]],
    });
  }

  @Output() public closePopup = new EventEmitter<boolean>()



  public addLocationTableRow(): void {
    this.locationTable.add({
      county: this.locationForm.value['county'],
      district: this.locationForm.value['district'],
      percent: this.locationForm.value['percent'],
      countyOrder: this.countyOrder++,
      districtOrder: this.districtOrder++
    }, this.locationForm.value['percent'])

    this.locationForm.patchValue({
      ['county']: '-Select-',
      ['district']: '-Select-',
      ['percent']: '',
    })
  }

  public percentValidation(formGroup: FormGroup): boolean | ValidationErrors {
      return formGroup.get('percent')!.errors || (formGroup.get('percent')!.value + this.locationTable.getPercentSum() > 100);
  }

  public countyAndDistrictValidation(): boolean | ValidationErrors {
    return this.locationTable.getData().some(x => x.county === this.locationForm.get('county')!.value && x.district === this.locationForm.get('district')!.value)
  }

  public filterDistricts(): void {
    // this.districts = DISTRICTS.filter(x => x.parent === this.locationForm.get('county')!.value)
  }
}
