import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleFormService {

  constructor() {
  }

  public checkStartIsBeforeEnd(startDate: Date, endDate: Date): boolean {
    let _endDate = endDate.getTime();
    let _startDate = startDate.getTime();

    return _startDate < _endDate;
  }

  public getDurationInDays(startDate: Date, endDate: Date): number {
    let d1 = new Date(endDate).getTime()
    let d2 = new Date(startDate).getTime()

    return ((d1 - d2) / (1000 * 3600 * 24));
  }
}
