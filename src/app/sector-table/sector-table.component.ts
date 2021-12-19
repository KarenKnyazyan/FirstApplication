import {Component, Input} from '@angular/core';
import {ProjectSectorModel} from "../../models/project-sector.model";
import {TableData} from "../../models/table-data.model";
import {SORTINGTYPES} from "../../assets/mock-data";

@Component({
  selector: 'app-sector-table',
  templateUrl: './sector-table.component.html',
  styleUrls: ['./sector-table.component.css']
})
export class SectorTableComponent {

  @Input() public tableHeader: string[] = []
  @Input() public tableData: TableData<ProjectSectorModel> = new TableData<ProjectSectorModel>();

  public sortingType = SORTINGTYPES.NORM;
  constructor() { }

  public tableSorting(): void {
    this.tableData.sorting(this.sortingType, "projectSector", "id");
    this.sortingType = SORTINGTYPES[this.sortingType]
  }
}
