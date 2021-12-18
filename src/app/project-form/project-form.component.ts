import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors} from "@angular/forms";

import {SampleFormService} from "../../shared/services/sample-form.service";

import {SORTINGTYPES} from "../../assets/mock-data";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  sectorSortingType: string = SORTINGTYPES.NORM;
  countySortingType: string = SORTINGTYPES.NORM;
  districtSortingType: string = SORTINGTYPES.NORM;

  constructor() {
  }

  ngOnInit(): void {
  }

  public sectorSorting() {
    // this.sectorTable= this.sectorTable.sorting(this.sectorSortingType, 'projectSector');
    //
    // // @ts-ignore
    // this.sectorSortingType = SORTINGTYPES[this.sectorSortingType];
  }

  public countySorting(): void {
    // this.sampleFormService.sorting(this.locationTableData, this.countySortingType, 'county');
    // // @ts-ignore
    // this.countySortingType = SORTINGTYPES[this.countySortingType];
  }

  public districtSorting(): void {
    // this.sampleFormService.sorting(this.locationTableData, this.districtSortingType, 'district');
    // // @ts-ignore
    // this.districtSortingType = SORTINGTYPES[this.districtSortingType];
  }


  public checkDate(): void {

  }

  public percentValidation(formGroup: FormGroup): boolean | ValidationErrors {
    return formGroup.get('percent')!.errors || (formGroup.get('percent')!.value > 100);
  }
}
