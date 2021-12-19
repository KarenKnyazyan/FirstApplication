import {Component, Input} from '@angular/core';
import {ProjectLocationModel} from "../../models/project-location.model";
import {TableData} from "../../models/table-data.model";
import {SORTINGTYPES} from "../../assets/mock-data";

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent {

  @Input() public tableHeader: string[] = []
  @Input() public tableData: TableData<ProjectLocationModel> = new TableData<ProjectLocationModel>();

  public countySortingType = SORTINGTYPES.NORM;
  public districtSortingType = SORTINGTYPES.NORM;
  constructor() { }

  public tableSorting(columnIndex: number) {
    if (columnIndex === 0) {
      this.tableData.sorting(this.countySortingType, "county","id");
      this.countySortingType = SORTINGTYPES[this.countySortingType];
    } else {
      this.tableData.sorting(this.districtSortingType, "district","id")
      this.districtSortingType = SORTINGTYPES[this.districtSortingType];
    }
  }
}
