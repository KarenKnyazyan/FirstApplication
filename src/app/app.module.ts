import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { ProjectFormComponent } from './project-form/project-form.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { ErrorComponent } from './error/error.component';
import { SectorTableComponent } from './sector-table/sector-table.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DurationComponent } from './duration/duration.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { SectorFormComponent } from './sector-form/sector-form.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationPopupComponent } from './location-popup/location-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectFormComponent,
    ComboBoxComponent,
    ErrorComponent,
    SectorTableComponent,
    LocationTableComponent,
    TextInputComponent,
    NumberInputComponent,
    DatePickerComponent,
    DurationComponent,
    SampleFormComponent,
    SectorFormComponent,
    LocationFormComponent,
    LocationPopupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
