import { Component, OnInit, ViewChild, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { Device } from 'src/app/models/Device/device';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-device-list-expanded',
  templateUrl: './device-list-expanded.component.html',
  styleUrls: ['./device-list-expanded.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DeviceListExpandedComponent implements OnInit, OnChanges {


  dataSource: MatTableDataSource<DeviceShort>;

  columnsToDisplay = ['deviceNumber', 'seller.name', 'customer.name', 'packageName', 'timeLock', 'language', 'lastActivation'];
  expandedElement: Device | null;

  constructor(private dS: DevicesService) { }

  @Input() devices: DeviceShort[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeviceChanged(newDevice: Device) {
    console.log('new device recieved');
    this.dataSource.data.find(dev => dev.id === newDevice.id).customer = newDevice.deviceInfo.customer;
    this.dataSource.data.find(dev => dev.id === newDevice.id).seller = newDevice.deviceInfo.seller;
  }

  sortingDataAccessor(item, property) {
    if (property.includes('.')) {
      return property.split('.')
        .reduce((object, key) => object[key] || '', item);
    }
    return item[property];
  }

  ngOnChanges(changes: SimpleChanges) {

    this.dataSource =  new MatTableDataSource<DeviceShort>(this.devices);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;

    // ustawienie filtrowania wgłąb obiektu https://stackoverflow.com/a/57747792
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.filterPredicate = (data: any, filter) => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    };

    this.dataSource.paginator = this.paginator;
  }


  ngOnInit() {
  }
}
