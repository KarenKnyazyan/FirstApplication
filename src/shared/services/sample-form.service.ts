import {Injectable} from '@angular/core';

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
}
