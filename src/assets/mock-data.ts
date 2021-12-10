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

export const COUNTIES: SelectModel[] = [
  { id: 1, option: "-Select-"},
  { id: 2, option: "Berat"},
  { id: 3, option: "Dibër"},
  { id: 4, option: "Durrës" },
  { id: 5, option: "Elbasan" },
  { id: 6, option: "Fier" },
  { id: 7, option: "Gjirokastër" },
  { id: 8, option: "Korçë" },
  { id: 9, option: "Kukës" }
]

export const DISTRICTS: SelectModel[] = [
  { id: 1, option: "-Select-", parent: "Berat" },
  { id: 2, option: "Berat", parent: "Berat" },
  { id: 3, option: "Kuçovë", parent: "Berat" },
  { id: 4, option: "Poliçan", parent: "Berat" },
  { id: 5, option: "Skrapar", parent: "Berat" },
  { id: 6, option: "Ura Vajgurore", parent: "Berat" },

  { id: 1, option: "-Select-", parent: "Dibër" },
  { id: 2, option: "Bulqizë", parent: "Dibër" },
  { id: 3, option: "Dibër", parent: "Dibër" },
  { id: 4, option: "Klos", parent: "Dibër" },
  { id: 5, option: "Mat", parent: "Dibër" },

  { id: 1, option: "-Select-", parent: "Durrës" },
  { id: 2, option: "Durrës", parent: "Durrës" },
  { id: 3, option: "Krujë", parent: "Durrës" },
  { id: 4, option: "Shijak", parent: "Durrës" },

  { id: 1, option: "-Select-", parent: "Elbasan" },
  { id: 2, option: "Belsh", parent: "Elbasan" },
  { id: 3, option: "Cërrik", parent: "Elbasan" },
  { id: 4, option: "Elbasan", parent: "Elbasan" },
  { id: 5, option: "Gramsh", parent: "Elbasan" },
  { id: 6, option: "Librazhd", parent: "Elbasan" },
  { id: 7, option: "Peqin", parent: "Elbasan" },
  { id: 8, option: "Prrenjas", parent: "Elbasan" },

  { id: 1, option: "-Select-", parent: "Fier" },
  { id: 2, option: "Fier", parent: "Fier" },
  { id: 3, option: "Divjakë", parent: "Fier" },
  { id: 4, option: "Lushnjë", parent: "Fier" },
  { id: 5, option: "Mallakastër", parent: "Fier" },
  { id: 6, option: "Patos", parent: "Fier" },
  { id: 7, option: "Roskovec", parent: "Fier" },

  { id: 1, option: "-Select-", parent: "Gjirokastër" },
  { id: 2, option: "Gjirokastër", parent: "Gjirokastër" },
  { id: 3, option: "Dropull", parent: "Gjirokastër" },
  { id: 4, option: "Këlcyrë", parent: "Gjirokastër" },
  { id: 5, option: "Libohovë", parent: "Gjirokastër" },
  { id: 6, option: "Memaliaj", parent: "Gjirokastër" },
  { id: 7, option: "Përmet", parent: "Gjirokastër" },
  { id: 8, option: "Tepelenë", parent: "Gjirokastër" },

  { id: 1, option: "-Select-", parent: "Korçë" },
  { id: 2, option: "Korçë", parent: "Korçë" },
  { id: 3, option: "Kolonjë", parent: "Korçë" },
  { id: 4, option: "Devoll", parent: "Korçë" },
  { id: 5, option: "Maliq", parent: "Korçë" },
  { id: 6, option: "Pogradec", parent: "Korçë" },
  { id: 7, option: "Pustec", parent: "Korçë" },

  { id: 1, option: "-Select-", parent: "Kukës" },
  { id: 2, option: "Kukës", parent: "Kukës" },
  { id: 3, option: "Has", parent: "Kukës" },
  { id: 4, option: "Tropojë", parent: "Kukës" }
]



// export const COUNTRIES: Map<SelectModel, SelectModel[]> = new Map<SelectModel, SelectModel[]>([
//   [{ id: 1, option: "-Select-" }, []],
//   [{ id: 2, option: "Berat" }, [ { id: 1, option: "-Select-" },
//                                     { id: 2, option: "Berat" },
//                                     { id: 3, option: "Kuçovë" },
//                                     { id: 4, option: "Poliçan" },
//                                     { id: 5, option: "Skrapar" },
//                                     { id: 6, option: "Ura Vajgurore" }]
//   ],
//   [{ id: 3, option: "Dibër" }, [{ id: 1, option: "-Select-" },
//                                 { id: 2, option: "Bulqizë" },
//                                 { id: 3, option: "Dibër" },
//                                 { id: 4, option: "Klos" },
//                                 { id: 5, option: "Mat" }]
//   ],
//   [{ id: 4, option: "Durrës" }, [ { id: 1, option: "-Select-" },
//                                   { id: 2, option: "Durrës" },
//                                   { id: 3, option: "Krujë" },
//                                   { id: 4, option: "Shijak" }]
//   ],
//   [{ id: 5, option: "Elbasan" }, [{ id: 1, option: "-Select-" },
//                                   { id: 2, option: "Belsh" },
//                                   { id: 3, option: "Cërrik" },
//                                   { id: 4, option: "Elbasan" },
//                                   { id: 5, option: "Gramsh" },
//                                   { id: 6, option: "Librazhd" },
//                                   { id: 7, option: "Peqin" },
//                                   { id: 8, option: "Prrenjas" }]
//   ],
//   [{ id: 6, option: "Fier" }, [ { id: 1, option: "-Select-" },
//                                 { id: 2, option: "Fier" },
//                                 { id: 3, option: "Divjakë" },
//                                 { id: 4, option: "Lushnjë" },
//                                 { id: 5, option: "Mallakastër" },
//                                 { id: 6, option: "Patos" },
//                                 { id: 7, option: "Roskovec" }]
//   ],
//   [{ id: 7, option: "Gjirokastër" }, [{ id: 1, option: "-Select-" },
//                                       { id: 2, option: "Gjirokastër" },
//                                       { id: 3, option: "Dropull" },
//                                       { id: 4, option: "Këlcyrë" },
//                                       { id: 5, option: "Libohovë" },
//                                       { id: 6, option: "Memaliaj" },
//                                       { id: 7, option: "Përmet" },
//                                       { id: 8, option: "Tepelenë" }]
//   ],
//   [{ id: 8, option: "Korçë" }, [{ id: 1, option: "-Select-" },
//                                 { id: 2, option: "Korçë" },
//                                 { id: 3, option: "Kolonjë" },
//                                 { id: 4, option: "Devoll" },
//                                 { id: 5, option: "Maliq" },
//                                 { id: 6, option: "Pogradec" },
//                                 { id: 7, option: "Pustec" }]
//   ],
//   [{ id: 9, option: "Kukës" }, [{ id: 1, option: "-Select-" },
//                                 { id: 2, option: "Kukës" },
//                                 { id: 3, option: "Has" },
//                                 { id: 4, option: "Tropojë" }]
//   ],
// ])

// export const KEYS = new Map<string, number> ([
//   [ "Berat",  2],
//   ["Dibër", 3]
// ])

export enum SORTINGTYPES {
  ASC = "DESC",
  DESC = "NORM",
  NORM = "ASC"
}
