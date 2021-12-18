import {Component, Input, OnInit} from '@angular/core';
import {ProjectLocationModel} from "../../models/project-location.model";

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent implements OnInit {

  @Input() public tableHeader: string[] = []
  @Input() public tableData: ProjectLocationModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
