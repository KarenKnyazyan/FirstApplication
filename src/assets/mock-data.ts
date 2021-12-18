import {SelectModel} from "../models/select.model";

export const STATUSES: SelectModel[] = [
  { id: 1, value: "-Select-" },
  { id: 2, value: "Planned", },
  { id: 3, value: "Pipelined" },
  { id: 4, value: "Ongoing" },
  { id: 5, value: "Stalled" },
  { id: 6, value: "Extended" },
  { id: 7, value: "Terminated" },
  { id: 8, value: "Suspended" },
  { id: 9, value: "Completed" },
]

export const SECTORS: SelectModel[] = [
  { id: 1, value: "-Select-" },
  { id: 2, value: "Health"},
  { id: 3, value: "Agriculture"},
  { id: 4, value: "Economy"},
  { id: 5, value: "Administrative"},
]

export const COUNTIES: SelectModel[] = [
  { id: 1, value: "-Select-"},
  { id: 2, value: "Berat"},
  { id: 3, value: "Dibër"},
  { id: 4, value: "Durrës" },
  { id: 5, value: "Elbasan" },
  { id: 6, value: "Fier" },
  { id: 7, value: "Gjirokastër" },
  { id: 8, value: "Korçë" },
  { id: 9, value: "Kukës" }
]

export const DISTRICTS: SelectModel[] = [
  { id: 1, value: "-Select-", parent: "Berat" },
  { id: 2, value: "Berat", parent: "Berat" },
  { id: 3, value: "Kuçovë", parent: "Berat" },
  { id: 4, value: "Poliçan", parent: "Berat" },
  { id: 5, value: "Skrapar", parent: "Berat" },
  { id: 6, value: "Ura Vajgurore", parent: "Berat" },

  { id: 1, value: "-Select-", parent: "Dibër" },
  { id: 2, value: "Bulqizë", parent: "Dibër" },
  { id: 3, value: "Dibër", parent: "Dibër" },
  { id: 4, value: "Klos", parent: "Dibër" },
  { id: 5, value: "Mat", parent: "Dibër" },

  { id: 1, value: "-Select-", parent: "Durrës" },
  { id: 2, value: "Durrës", parent: "Durrës" },
  { id: 3, value: "Krujë", parent: "Durrës" },
  { id: 4, value: "Shijak", parent: "Durrës" },

  { id: 1, value: "-Select-", parent: "Elbasan" },
  { id: 2, value: "Belsh", parent: "Elbasan" },
  { id: 3, value: "Cërrik", parent: "Elbasan" },
  { id: 4, value: "Elbasan", parent: "Elbasan" },
  { id: 5, value: "Gramsh", parent: "Elbasan" },
  { id: 6, value: "Librazhd", parent: "Elbasan" },
  { id: 7, value: "Peqin", parent: "Elbasan" },
  { id: 8, value: "Prrenjas", parent: "Elbasan" },

  { id: 1, value: "-Select-", parent: "Fier" },
  { id: 2, value: "Fier", parent: "Fier" },
  { id: 3, value: "Divjakë", parent: "Fier" },
  { id: 4, value: "Lushnjë", parent: "Fier" },
  { id: 5, value: "Mallakastër", parent: "Fier" },
  { id: 6, value: "Patos", parent: "Fier" },
  { id: 7, value: "Roskovec", parent: "Fier" },

  { id: 1, value: "-Select-", parent: "Gjirokastër" },
  { id: 2, value: "Gjirokastër", parent: "Gjirokastër" },
  { id: 3, value: "Dropull", parent: "Gjirokastër" },
  { id: 4, value: "Këlcyrë", parent: "Gjirokastër" },
  { id: 5, value: "Libohovë", parent: "Gjirokastër" },
  { id: 6, value: "Memaliaj", parent: "Gjirokastër" },
  { id: 7, value: "Përmet", parent: "Gjirokastër" },
  { id: 8, value: "Tepelenë", parent: "Gjirokastër" },

  { id: 1, value: "-Select-", parent: "Korçë" },
  { id: 2, value: "Korçë", parent: "Korçë" },
  { id: 3, value: "Kolonjë", parent: "Korçë" },
  { id: 4, value: "Devoll", parent: "Korçë" },
  { id: 5, value: "Maliq", parent: "Korçë" },
  { id: 6, value: "Pogradec", parent: "Korçë" },
  { id: 7, value: "Pustec", parent: "Korçë" },

  { id: 1, value: "-Select-", parent: "Kukës" },
  { id: 2, value: "Kukës", parent: "Kukës" },
  { id: 3, value: "Has", parent: "Kukës" },
  { id: 4, value: "Tropojë", parent: "Kukës" }
]

export enum SORTINGTYPES {
  ASC = "DESC",
  DESC = "NORM",
  NORM = "ASC"
}
