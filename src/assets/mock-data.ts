import {SelectModel} from "../models/select.model";

export const STATUSES: SelectModel[] = [
  { id: 1, option: "-Select-" },
  { id: 2, option: "Planned", },
  { id: 3, option: "Pipelined" },
  { id: 4, option: "Ongoing" },
  { id: 5, option: "Stalled" },
  { id: 6, option: "Extended" },
  { id: 7, option: "Terminated" },
  { id: 8, option: "Suspended" },
  { id: 9, option: "Completed" },
]

export const SECTORS: SelectModel[] = [
  { id: 1, option: "-Select-" },
  { id: 2, option: "Health"},
  { id: 3, option: "Agriculture"},
  { id: 4, option: "Economy"},
  { id: 5, option: "Administrative"},
]

export const COUNTRIES: SelectModel[] = [
  { id: 1, option: "-Select-" },
  { id: 2, option: "Berat" },
  { id: 3, option: "Didër" },
  { id: 4, option: "Durrës" },
  { id: 5, option: "Elbasan" },
  { id: 6, option: "Fier" },
  { id: 7, option: "Gjirokastër" },
  { id: 8, option: "Korçë" },
  { id: 9, option: "Kukës" },
]

export const DISTRICTS: SelectModel[] = [
  { id: 1, option: "-Select-" },
  { id: 2, option: "Berat" },
  { id: 3, option: "Kuçovë" },
  { id: 4, option: "Poliçan" },
  { id: 5, option: "Skrapar" },
  { id: 6, option: "Ura Vajgurore" },
  { id: 7, option: "Bulqizë" },
  { id: 8, option: "Dibër" },
  { id: 9, option: "Klos" },
  { id: 10, option: "Mat" },
  { id: 11, option: "Belsh" },
  { id: 12, option: "Cërrik" },
  { id: 13, option: "Elbasan" },
  { id: 14, option: "Gramsh" },
  { id: 15, option: "Librazhd" },
  { id: 16, option: "Peqin" },
  { id: 17, option: "Prrenjas" },
]

export enum SORTINGTYPES {
  ASC = "DESC",
  DESC = "NORM",
  NORM = "ASC"
}
