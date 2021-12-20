import {Component} from '@angular/core';
import {SampleFormService} from "../../shared/services/sample-form.service";

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent {

  public startDate: Date | null;
  public displayStartDateError = false;
  public startDateIsValid = false;
  public endDate: Date | null;
  public displayEndDateError = false;
  public duration = 0;

  constructor(private sampleService: SampleFormService) {
    this.startDate = null;
    this.endDate = null;
  }

  public setStartDate(event: string): void {
    this.startDate = new Date(event);
    this.startDateIsValid = true;
    if (this.endDate !== null) {
      if (this.sampleService.checkStartIsBeforeEnd(this.startDate, this.endDate)) {
        this.setDuration();
        this.displayStartDateError = false;
        this.displayEndDateError = false;
      } else {
        this.displayStartDateError = true;
        this.duration = 0;
      }
    }
  }

  public setEndDate(event: string): void {
    this.endDate = new Date(event);
    if (this.startDate !== null) {
      if (this.sampleService.checkStartIsBeforeEnd(this.startDate!, this.endDate)) {
        this.setDuration();
        this.displayStartDateError = false;
        this.displayEndDateError = false;
        this.startDateIsValid = true;
      } else {
        this.displayEndDateError = true;
        this.duration = 0;
      }
    }
  }

  public setDuration(): void {
    this.duration = this.sampleService.getDurationInDays(this.startDate!, this.endDate!);
  }
}
