import {SelectModel} from "./select.model";
import {ProjectSectorModel} from "./project-sector.model";
import {ProjectLocationModel} from "./project-location.model";

export interface ProjectFormModel {
  projectCode : string,
  projectTitle : string,
  projectDescription? : string,
  implementationStatus: SelectModel,
  plannedStartDate: Date,
  plannedEndDate: Date,
  projectDuration: number
  sectorInfo: ProjectSectorModel[],
  locationInfo: ProjectLocationModel[]
}
