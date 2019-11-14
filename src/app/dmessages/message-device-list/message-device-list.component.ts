import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { SelectionModel } from '@angular/cdk/collections';
import { MessageDevice } from 'src/app/models/messageDevice';

@Component({
  selector: 'app-message-device-list',
  templateUrl: './message-device-list.component.html',
  styleUrls: ['./message-device-list.component.scss']
})
export class MessageDeviceListComponent implements OnInit, OnChanges {

  dataSource: MatTableDataSource<MessageDevice>;

  @Input() devices: MessageDevice[];
  @Output() selectedDevicesEmitter = new  EventEmitter<DeviceShort[]>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<MessageDevice>(true, []);
  selectedCount: number;

  columnsToDisplay = [
    'select',
    'diagprog.deviceNumber',
    'diagprog.seller.name',
    'diagprog.customer.name',
    'diagprog.packageName',
    'diagprog.timeLock',
    'diagprog.language',
    'diagprog.lastActivation',
    'downloadDate'
  ];

  passSelected() {
    if (this.selection.changed) {
      console.log('przekazuje zaznaczone');
      this.selectedDevicesEmitter.emit(this.selection.selected.map(x => x.diagprog));
    }

  }

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

  checkboxLabel(row?: MessageDevice): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.diagprog.id + 1}`;
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

  selectionChanged() {
    console.log('click');
    this.passSelected();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<MessageDevice>(this.devices);

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
