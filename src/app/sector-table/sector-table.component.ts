import {Component, Input} from '@angular/core';
import {ProjectSectorModel} from "../../models/project-sector.model";

@Component({
  selector: 'app-sector-table',
  templateUrl: './sector-table.component.html',
  styleUrls: ['./sector-table.component.css']
})
export class SectorTableComponent {

  @Input() public tableHeader: string[] = []
  @Input() public tableData: ProjectSectorModel[] = [];

  constructor() { }

}
