import { Component, OnInit, Input } from '@angular/core';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MessageDevice } from 'src/app/models/messageDevice';

@Component({
  selector: 'app-device-message-table-column-filter',
  templateUrl: './device-message-table-column-filter.component.html',
  styleUrls: ['./device-message-table-column-filter.component.scss']
})
export class DeviceMessageTableColumnFilterComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<MessageDevice>;

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
    this.sellerOptions
     = Array.from(new Set(this.dataSource.data.filter(x => x.diagprog.sellerName).map(x => x.diagprog.sellerName.trim()))).sort();
    this.customerOptions
    = Array.from(new Set(this.dataSource.data.filter(x => x.diagprog.customerName).map(x => x.diagprog.customerName.trim()))).sort();
    this.languageOptions
    = Array.from(new Set(this.dataSource.data.filter(x => x.diagprog.language).map(x => x.diagprog.language.trim()))).sort();
    this.packageOptions
    = Array.from(new Set(this.dataSource.data.filter(x => x.diagprog.packageName).map(x => x.diagprog.packageName.trim()))).sort();

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
    (data: MessageDevice, filtersJson: string) => {

        const matchFilter = [];
        const filters = JSON.parse(filtersJson);

        filters.forEach(filter => {

          const filtered = data.diagprog[filter.id];
          const val = filtered === null || undefined ? '' : filtered;
          matchFilter.push(val.trim().toLowerCase() === filter.value.trim().toLowerCase());

        });
        return matchFilter.every(Boolean);
      };
    this.dataSource.filter = filterValue;
}


}
