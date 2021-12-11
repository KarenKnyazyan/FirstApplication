import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
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
import {COUNTIES, DISTRICTS, SECTORS, SORTINGTYPES, STATUSES} from "../../assets/mock-data";
import {SelectModel} from "../../models/select.model";

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
  countries = COUNTIES;
  districts: SelectModel[] = [{id: 1, option: "-Select-"}]

  /**
   * Tables data
   */
  sectorTableData: ProjectSectorModel[] = [];
  sectorsPercentsSum = 0;
  sectorsOrder = 1;
  locationTableData: ProjectLocationModel[] = [];
  locationsPercentsSum = 0;
  countyOrder = 1;
  districtOrder = 1;

  /**
   * sorting types
   */
  sectorSortingType: string = SORTINGTYPES.NORM;
  countySortingType: string = SORTINGTYPES.NORM;
  districtSortingType: string = SORTINGTYPES.NORM;

  displayProjectLocationsPopup: Boolean = false;

  /**
   * Forms
   */
  sampleForm: FormGroup = new FormGroup({});
  sectorForm: FormGroup = new FormGroup({});
  locationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private sampleFormService: SampleFormService) {
  }

  ngOnInit(): void {
    this.sampleForm = this.fb.group({
      projectCode: ['', [Validators.required, Validators.minLength(6)]],
      projectTitle: ['', Validators.required],
      implementationStatus: ['', Validators.required],
      plannedStartDate: ['', Validators.required],
      plannedEndDate: [''],
      duration: ['']
    });

    this.sectorForm = this.fb.group({
      sector: ['', Validators.required],
      percent: ['', [Validators.max(100), Validators.min(1)]]
    });

    this.locationForm = this.fb.group({
      county: ['', Validators.required],
      district: ['', Validators.required],
      percent: ['', [Validators.max(100), Validators.min(1)]],
    });
  }

  public sectorNameSorting() {
    this.sampleFormService.sorting(this.sectorTableData, this.sectorSortingType);

    console.log(this.sectorSortingType);

    // @ts-ignore
    this.sectorSortingType = SORTINGTYPES[this.sectorSortingType];
  }

  public countySorting(): void {
    this.sampleFormService.sorting(this.locationTableData, this.countySortingType, 'county');
    // @ts-ignore
    this.countySortingType = SORTINGTYPES[this.countySortingType];
  }

  public districtSorting(): void {
    this.sampleFormService.sorting(this.locationTableData, this.districtSortingType, 'district');
    // @ts-ignore
    this.districtSortingType = SORTINGTYPES[this.districtSortingType];
  }

  public checkDate(): void {
    if (this.sampleForm.value['plannedEndDate'] !== '' && this.sampleForm.value['plannedStartDate'] !== '') {
      const duration = this.sampleFormService.setDuration(this.sampleForm.value['plannedStartDate'], this.sampleForm.value['plannedEndDate']);
      this.sampleForm.patchValue({['duration']: duration});
    }
  }

  public addSectorsTableRow(): void {
    this.sectorTableData.push({
      projectSector: this.sectorForm.value['sector'],
      percent: this.sectorForm.value['percent'],
      order: this.sectorsOrder++
    });

    this.sectorsPercentsSum += this.sectorForm.value['percent'];

    this.sectorForm.patchValue({
      ['sector']: '-Select-',
      ['percent']: '',
    })
  }

  public addLocationTableRow(): void {
    this.locationTableData.push({
      county: this.locationForm.value['county'],
      district: this.locationForm.value['district'],
      percent: this.locationForm.value['percent'],
      countyOrder: this.countyOrder++,
      districtOrder: this.districtOrder++
    })

    this.locationsPercentsSum += this.locationForm.value['percent'];

    this.locationForm.patchValue({
      ['county']: '-Select-',
      ['district']: '-Select-',
      ['percent']: '',
    })
  }

  public sectorValidation(): boolean | ValidationErrors {
    return this.sectorTableData.length === 0 ? false : this.sectorTableData.some(x => x.projectSector === this.sectorForm.value['sector'])
  }

  public percentValidation(formGroup: FormGroup): boolean | ValidationErrors {
    if (formGroup === this.locationForm) {
      return formGroup.get('percent')!.errors || (formGroup.get('percent')!.value + this.locationsPercentsSum > 100);
    }
    return formGroup.get('percent')!.errors || (formGroup.get('percent')!.value + this.sectorsPercentsSum > 100);
  }

  public countyAndDistrictValidation(): boolean | ValidationErrors {
    return this.locationTableData.some(x => x.county === this.locationForm.value['county'] && x.district === this.locationForm.value['district'])
  }

  public filterDistricts(): void {
    this.districts = DISTRICTS.filter(x => x.parent === this.locationForm.get('county')!.value)
  }
}
