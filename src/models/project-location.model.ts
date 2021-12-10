import {SelectModel} from "./select.model";

export interface ProjectLocationModel {
  county: SelectModel,
  district: SelectModel[],
  percent: number
}
