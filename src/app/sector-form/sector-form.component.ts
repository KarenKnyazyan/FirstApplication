import { Component } from '@angular/core';
import {SECTORS} from "../../assets/mock-data";
import {TableData} from "../../models/table-data.model";
import {ProjectSectorModel} from "../../models/project-sector.model";

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent {

  public sectorsData = SECTORS;
  public sectorTable: TableData<ProjectSectorModel> = new TableData<ProjectSectorModel>();
  public sectorPercentData = {currentSector: '', currentPercent: 0}
  public rowId = 1;
  public comboBoxDefaultValue = 1;
  public percentIsValid = false;
  public sectorIsValid = false;

  constructor() { }

  public addSectorsTableRow(): void {
    this.sectorTable.add({
      projectSector: this.sectorPercentData.currentSector,
      percent: this.sectorPercentData.currentPercent,
      id: this.rowId++
    }, this.sectorPercentData.currentPercent);


  }

  public getPercentValue(event: [number, boolean]) : void {
    this.sectorPercentData.currentPercent = event[0];
    this.percentIsValid = event[1];
  }

  public getSectorValue(event: [string, boolean]) : void {
    this.sectorPercentData.currentSector = event[0];
    this.sectorIsValid = event[1];
  }
}
