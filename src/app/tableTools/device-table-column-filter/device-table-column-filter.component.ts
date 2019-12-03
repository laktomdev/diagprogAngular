import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-device-table-column-filter',
  templateUrl: './device-table-column-filter.component.html',
  styleUrls: ['./device-table-column-filter.component.scss']
})
export class DeviceTableColumnFilterComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<DeviceShort>;

  constructor() { }

  sellerControl = new FormControl();
  sellerOptions: string[];
  filteredSellerOptions: Observable<string[]>;

  customerControl = new FormControl();
  customerOptions: string[];
  filteredCustomerOptions: Observable<string[]>;

  languageControl = new FormControl();
  languageOptions: string[];
  filteredLanguageOptions: Observable<string[]>;

  packageControl = new FormControl();
  packageOptions: string[];
  filteredPackageOptions: Observable<string[]>;

  isTimeLoked: boolean;


  tableFilters = [
  ];

  ngOnInit() {
    this.sellerOptions = Array.from(new Set(this.dataSource.data.filter(x => x.sellerName).map(x => x.sellerName.trim()))).sort();
    this.customerOptions = Array.from(new Set(this.dataSource.data.filter(x => x.customerName).map(x => x.customerName.trim()))).sort();
    this.languageOptions = Array.from(new Set(this.dataSource.data.filter(x => x.language).map(x => x.language.trim()))).sort();
    this.packageOptions = Array.from(new Set(this.dataSource.data.filter(x => x.packageName).map(x => x.packageName.trim()))).sort();

    this.sellerOptions.unshift('');
    this.customerOptions.unshift('');
    this.languageOptions.unshift('');
    this.packageOptions.unshift('');

    this.filteredSellerOptions = this.sellerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._sellerFilter(value))
    );

    this.filteredCustomerOptions = this.customerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._customerFilter(value))
    );

    this.filteredLanguageOptions = this.languageControl.valueChanges.pipe(
      startWith(''),
      map(value => this._languageFilter(value))
    );

    this.filteredPackageOptions = this.packageControl.valueChanges.pipe(
      startWith(''),
      map(value => this._packageFilter(value))
    );


    this.filteredSellerOptions.subscribe(
      () => {
        this.filterHandle('sellerName', this.sellerControl);
      }
    );

    this.filteredCustomerOptions.subscribe(
      () => {
        this.filterHandle('customerName', this.customerControl);
      }
    );

    this.filteredLanguageOptions.subscribe(
      () => {
        this.filterHandle('language', this.languageControl);
      }
    );

    this.filteredPackageOptions.subscribe(
      () => {
        this.filterHandle('packageName', this.packageControl);
      }
    );
  }

  private filterHandle(key: string, control: FormControl) {
    const foundFilter = this.tableFilters.find(x => x.id === key);
    if (control.value) {
      if (!foundFilter) {
        this.tableFilters.push({id: key, value: control.value});
      } else {
        foundFilter.value = control.value;
      }
    } else {
      if (foundFilter) {
        const index = this.tableFilters.indexOf(foundFilter, 0);
        if (index > -1) {
          this.tableFilters.splice(index, 1);
        }
      }
    }
    this.applyFilter(JSON.stringify(this.tableFilters));
  }
  private _sellerFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.sellerOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _customerFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.customerOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _languageFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.languageOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _packageFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.packageOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate =
    (data: DeviceShort, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);

        filters.forEach(filter => {
          const val = data[filter.id] === null ? '' : data[filter.id];
          matchFilter.push(val.trim().toLowerCase() === filter.value.trim().toLowerCase());
        });
        return matchFilter.every(Boolean);
      };
    this.dataSource.filter = filterValue;
}

}
