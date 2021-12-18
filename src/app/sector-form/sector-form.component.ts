import { Component, OnInit } from '@angular/core';
import {SECTORS} from "../../assets/mock-data";
import {TableData} from "../../models/table-data.model";
import {ProjectSectorModel} from "../../models/project-sector.model";
import {FormGroup, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit {

  sectorsData = SECTORS;
  sectorTable: TableData<ProjectSectorModel> = new TableData<ProjectSectorModel>();
  sectorPercentData = {currentSector: '', currentPercent: 0}
  sectorsOrder = 1;

  percentIsValid = false;

  constructor() { }

  sectorForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
  }

  public addSectorsTableRow(): void {

    this.sectorTable.add({
      projectSector: this.sectorPercentData.currentSector,
      percent: this.sectorPercentData.currentPercent,
      id: this.sectorsOrder++
    }, this.sectorForm.value['percent']);

    this.sectorForm.patchValue({
      ['sector']: '-Select-',
      ['percent']: '',
    })

  }

  public sectorValidation(event?: string): boolean {
    return this.sectorTable.getData().length === 0 ? false : this.sectorTable.getData().some(x => x.projectSector === '')
  }

  public getChildData(event: [number, boolean]) {
    this.sectorPercentData.currentPercent = event[0];
    this.percentIsValid = event[1];
  }

  public percentValidation(formGroup: FormGroup): boolean | ValidationErrors {
    // if (formGroup === this.locationForm) {
    //   return formGroup.get('percent')!.errors || (formGroup.get('percent')!.value + this.locationTable.getPercentSum() > 100);
    // }
    return  this.sectorTable.getPercentSum() > 100;
  }

}
