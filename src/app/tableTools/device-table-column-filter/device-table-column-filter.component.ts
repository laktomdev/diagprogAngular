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


  tableFilters = [
    {id: 'sellerName', value: ''},
    {id: 'customerName', value: ''},
    {id: 'language', value: ''}
  ];

  ngOnInit() {
    this.sellerOptions = Array.from(new Set(this.dataSource.data.filter(x => x.sellerName).map(x => x.sellerName.trim()))).sort();
    this.customerOptions = Array.from(new Set(this.dataSource.data.filter(x => x.customerName).map(x => x.customerName.trim()))).sort();
    this.languageOptions = Array.from(new Set(this.dataSource.data.filter(x => x.language).map(x => x.language.trim()))).sort();

    this.sellerOptions.unshift('');
    this.customerOptions.unshift('');
    this.languageOptions.unshift('');

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


    this.filteredSellerOptions.subscribe(
      () => {
        if (this.sellerControl.value) {
          this.tableFilters.find(x => x.id === 'sellerName').value = this.sellerControl.value;
        } else {
          this.tableFilters.find(x => x.id === 'sellerName').value = '';
        }
        this.applyFilter( JSON.stringify(this.tableFilters));
      }
    );

    this.filteredCustomerOptions.subscribe(
      () => {
        if (this.customerControl.value) {

          this.tableFilters.find(x => x.id === 'customerName').value = this.customerControl.value;
        } else {
          this.tableFilters.find(x => x.id === 'customerName').value = '';
        }
        this.applyFilter( JSON.stringify(this.tableFilters));
      }
    );

    this.filteredLanguageOptions.subscribe(
      () => {
        if (this.languageControl.value) {

          this.tableFilters.find(x => x.id === 'language').value = this.languageControl.value;
        } else {
          this.tableFilters.find(x => x.id === 'language').value = '';
        }
        this.applyFilter(JSON.stringify(this.tableFilters));
      }
    );
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

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate =
    (data: DeviceShort, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);

        filters.forEach(filter => {
          const val = data[filter.id] === null ? '' : data[filter.id];
          matchFilter.push(val.toLowerCase().includes(filter.value.trim().toLowerCase()));
        });
        return matchFilter.every(Boolean);
      };


    this.dataSource.filter = filterValue;
}

}
