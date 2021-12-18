import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableData} from "../../models/table-data.model";

@Component({
    selector: 'app-combo-box',
    templateUrl: './combo-box.component.html',
    styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

    @Input() public dropdownData: { id: number, value: string, parent?: string }[] = [{id: 1, value: "-Select-"}];
    @Input() public tableData: TableData<any> = new TableData<any>();
    @Input() public label = '';
    @Input() public errorMessage = '';
    // @Input() public displayErrorMessage!: (value: string) => boolean | ValidationErrors;
    // @Input() public formControlName = '';

    @Output() selectedValue = new EventEmitter<[string, boolean]>();
    // validationFn!: boolean | ValidationErrors;
    //
    //  data!: {id: number, value: string, parent?: string}[];
    //
    //  label = 'Sectors';
    //  errorMessage = 'Error Message';
    //
    //  formControlName = '';

    constructor() {
    }

    ngOnInit(): void {
        // this.data = SECTORS
    }


    isValidSector = false;

    public dropdownValidation(value: string): void {
        if (this.dropdownData[0].parent === undefined) {
            this.isValidSector = this.tableData.getData().length === 0 ? false : this.tableData.getData().some(x => x.projectSector === value);
            if (!this.isValidSector) {
                this.selectedValue.emit([value, this.isValidSector]);
            }
        } else {
            this.isValidSector = this.tableData.getData().some(x => x.county === value && x.district === value)
            if (!this.isValidSector) {
                this.selectedValue.emit([value, this.isValidSector]);
            }
        }
    }
}
