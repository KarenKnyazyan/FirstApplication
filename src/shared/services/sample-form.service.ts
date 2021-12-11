import {Injectable} from '@angular/core';
import {ProjectSectorModel} from "../../models/project-sector.model";
import {ProjectLocationModel} from "../../models/project-location.model";

@Injectable({
  providedIn: 'root'
})
export class SampleFormService {

  constructor() {
  }

  setDuration(startDate: Date, endDate: Date) {
    let d1 = new Date(endDate).getTime()
    let d2 = new Date(startDate).getTime()
    if (d1 > d2) {
      return ((d1 - d2) / (1000 * 3600 * 24));
    } else {
      alert("Unavailable start or/and end date")
      return ''
    }
  }

  sorting(tableData: ProjectSectorModel[] | ProjectLocationModel[], sortType: string, columnName?: string) {
    if ('projectSector' in tableData[0]) {
      switch (sortType) {
        case "ASC":
          (tableData as ProjectSectorModel[]).sort((sectorName1, sectorName2) => {
            return sectorName1.projectSector > sectorName2.projectSector ? 1 : -1;
          });
          break;
        case "DESC":
          (tableData as ProjectSectorModel[]).sort((sectorName1, sectorName2) => {
            return sectorName1.projectSector > sectorName2.projectSector ? -1 : 1;
          });
          break;
        case "NORM":
          (tableData as ProjectSectorModel[]).sort((sectorName1, sectorName2) => {
            return sectorName1.order! > sectorName2.order! ? 1 : -1;
          });
      }
    } else {
      if (columnName === 'county') {
        switch (sortType) {
          case "ASC":
            (tableData as ProjectLocationModel[]).sort((countyName1, countyName2) => {
              return countyName1.county > countyName2.county ? 1 : -1;
            });
            break;
          case "DESC":
            (tableData as ProjectLocationModel[]).sort((countyName1, countyName2) => {
              return countyName1.county > countyName2.county ? -1 : 1;
            });
            break;
          case "NORM":
            (tableData as ProjectLocationModel[]).sort((countyName1, countyName2) => {
              return countyName1.countyOrder! > countyName2.countyOrder! ? 1 : -1;
            });
        }
      } else {
        switch (sortType) {
          case "ASC":
            (tableData as ProjectLocationModel[]).sort((districtName1, districtName2) => {
              return districtName1.district > districtName2.district ? 1 : -1;
            });
            break;
          case "DESC":
            (tableData as ProjectLocationModel[]).sort((districtName1, districtName2) => {
              return districtName1.district > districtName2.district ? -1 : 1;
            });
            break;
          case "NORM":
            (tableData as ProjectLocationModel[]).sort((districtName1, districtName2) => {
              return districtName1.districtOrder! > districtName2.districtOrder! ? 1 : -1;
            });
        }
      }
    }
  }
}
