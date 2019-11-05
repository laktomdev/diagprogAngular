import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-device-list-checkboxed',
  templateUrl: './device-list-checkboxed.component.html',
  styleUrls: ['./device-list-checkboxed.component.scss']
})
export class DeviceListCheckboxedComponent implements OnInit, OnChanges {
  dataSource: MatTableDataSource<DeviceShort>;
  @Input() devices: DeviceShort[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<DeviceShort>(true, []);
  selectedCount: number;

  columnsToDisplay = [
    'select',
    'deviceNumber',
    'seller.name',
    'customer.name',
    'packageName',
    'timelock',
    'language',
    'lastActivation'
  ];

  isAllSelected() {
    let numSelected = 0;
    this.dataSource.filteredData.forEach(row => this.selection.isSelected(row) ? numSelected++ : null);

    const numRows = this.dataSource.filteredData.length;


    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.dataSource.filteredData.forEach(row => this.selection.deselect(row)) :
        this.dataSource.filteredData.forEach(row => this.selection.select(row));


  }

  checkboxLabel(row?: DeviceShort): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  selectionChange(event: any) {
   console.log('hejo');
   console.log(event);
  }

  constructor() {}

  ngOnInit() {}

  sortingDataAccessor(item, property) {
    if (property.includes('.')) {
      return property
        .split('.')
        .reduce((object, key) => object[key] || '', item);
    }
    return item[property];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<DeviceShort>(this.devices);

    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
    this.dataSource.paginator = this.paginator;

    // ustawienie filtrowania wgłąb obiektu https://stackoverflow.com/a/57747792
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.filterPredicate = (data: any, filter) => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
