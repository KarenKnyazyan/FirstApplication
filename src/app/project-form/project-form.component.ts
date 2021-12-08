import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, of} from "rxjs";
/**
 * Services
 * */
import {SampleFormService} from "../../shared/services/sample-form.service";
/**
 * Models
 */
import {ProjectSectorModel} from "../../models/project-sector.model";
import {ProjectLocationModel} from "../../models/project-location.model";
/**
 * Input Data
 */
import {COUNTRIES, DISTRICTS, SECTORS, SORTINGTYPES, STATUSES} from "../../assets/mock-data";


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  /**
   * Get data vor select inputs
   */
  implementationStatuses = STATUSES;
  sectorsData = SECTORS;
  countries = COUNTRIES;
  districts = DISTRICTS;

  // sectors: Set<String> = new Set<String>();

  /**
   * Tables data
   */
  sectorTableData: ProjectSectorModel[] = [];
  locationTableData: ProjectLocationModel[] = [];

  sectorTableData$: Observable<ProjectSectorModel[]> = of(this.sectorTableData);
  /**
   * sorting types
   */
  sectorSortingType: string = SORTINGTYPES.NORM;
  countrySortingType: string = SORTINGTYPES.NORM;
  districtSortingType: string = SORTINGTYPES.NORM;

  displayProjectLocationsPopup: Boolean = false;

  /**
   * Forms
   */
  sampleForm: FormGroup = new FormGroup({});
  sectorForm: FormGroup = new FormGroup({});
  locationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private sampleFormService: SampleFormService) { }

  ngOnInit(): void {
    this.sampleForm = this.fb.group({
      projectCode: ['', Validators.required],
      projectTitle: ['', Validators.required],
      implementationStatus: ['', Validators.required],
      plannedStartDate: ['', Validators.required],
      plannedEndDate: [''],
      duration: ['']
    });

    this.sectorForm = this.fb.group({
      sector: [''],
      sectorPercent: ['', [Validators.max(100), Validators.min(1)]]
    });

    this.locationForm = this.fb.group({
      country: ['', Validators.required],
      district: ['', Validators.required],
      percent: ['', [Validators.max(100), Validators.min(1)]],
    });
  }

  sectorNameSorting() {
    this.sampleFormService.sorting(this.sectorTableData, this.sectorSortingType);

    console.log(this.sectorSortingType);

    // @ts-ignore
    this.sectorSortingType = SORTINGTYPES[this.sectorSortingType];
  }

  countrySorting() {
    this.sampleFormService.sorting(this.locationTableData, this.countrySortingType, 'country');
    // @ts-ignore
    this.countrySortingType = SORTINGTYPES[this.countrySortingType];
  }

  districtSorting() {
    this.sampleFormService.sorting(this.locationTableData, this.districtSortingType, 'district');
    // @ts-ignore
    this.districtSortingType = SORTINGTYPES[this.districtSortingType];
  }

  checkDate() {
    if (this.sampleForm.value['plannedEndDate'] !== '' && this.sampleForm.value['plannedStartDate'] !== '') {
      const duration = this.sampleFormService.setDuration(this.sampleForm.value['plannedStartDate'], this.sampleForm.value['plannedEndDate']);
      this.sampleForm.patchValue({['duration']: duration});
    }
  }

  addSectorsTableRow() {
    if (this.sectorForm.value['sector'] !== '') {
      if (this.sectorForm.value['sectorPercent'] !== '') {
        this.sectorTableData.push({
          projectSector: this.sectorForm.value['sector'],
          percent: this.sectorForm.value['sectorPercent']
        });

        // this.sectorTableData$.pipe(tap(data => data.push({
        //   projectSector: this.sectorForm.value['sector'],
        //   percent: this.sectorForm.value['sectorPercent']
        // })))

        this.sectorTableData$.subscribe({next: value => console.log(value)})
      } else {
        alert("Unavailable percent value")
      }
    } else {
      alert("You haven't selected sector")
    }

    this.sectorForm.patchValue({
      ['sector']: '-Select-',
      ['sectorPercent']: '',
    })
  }

  addLocationTableRow() {
    if (this.locationForm.value['percent'] !== '') {
      this.locationTableData.push({
        country: this.locationForm.value['country'],
        district: this.locationForm.value['district'],
        percent: this.locationForm.value['percent']
      })
    } else {
      alert("Unavailable percent value")
    }

    this.locationForm.patchValue({
      ['country']: '-Select-',
      ['district']: '-Select-',
      ['percent']: '',
    })
  }
}
