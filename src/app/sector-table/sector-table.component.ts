import {Component, Input, OnInit} from '@angular/core';
import {ProjectSectorModel} from "../../models/project-sector.model";

@Component({
  selector: 'app-sector-table',
  templateUrl: './sector-table.component.html',
  styleUrls: ['./sector-table.component.css']
})
export class SectorTableComponent implements OnInit {

  @Input() public tableHeader: string[] = []
  @Input() public tableData: ProjectSectorModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
