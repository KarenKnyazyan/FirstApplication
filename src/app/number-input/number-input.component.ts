import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableData} from "../../models/table-data.model";

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

    @Input() public label = '';
    @Input() public errorMessage = '';
    @Input() public tableData: TableData<any> = new TableData<any>()

    @Input() public withLabel = false;
    @Input() public withoutLabel = false;

    @Output() percent = new EventEmitter<[number, boolean]>()

    constructor() {
    }

    ngOnInit(): void {
    }

    isInvalidPercent = false
    public percentValidation(value: string) {
        this.isInvalidPercent = this.tableData.getPercentSum() + Number(value) > 100;
        if (!this.isInvalidPercent) {
            this.percent.emit([Number(value), this.isInvalidPercent]);
        } else {
            this.percent.emit([0, !this.isInvalidPercent]);
        }
    }
}
