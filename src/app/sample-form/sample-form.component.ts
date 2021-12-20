import { Component } from '@angular/core';
import {STATUSES} from "../../assets/mock-data";

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent {

  public implementationStatuses = STATUSES;
  public comboBoxDefaultValue = 1;
  constructor() { }
}
