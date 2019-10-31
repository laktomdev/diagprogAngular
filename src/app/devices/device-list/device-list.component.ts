import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Device } from 'src/app/models/Device/device';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DeviceListComponent implements OnInit {

  dataSource: MatTableDataSource<DeviceShort>;
  devices: DeviceShort[];
  columnsToDisplay = ['deviceNumber', 'seller.name', 'customer.name', 'packageName', 'timelock', 'lastActivation', 'language'];
  expandedElement: Device | null;
  deviceCount: number;


  constructor(private dS: DevicesService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeviceChanged(newDevice: Device) {
    console.log('new device recieved');
    this.dataSource.data.find(dev => dev.id === newDevice.id).customer = newDevice.deviceInfo.customer;
    this.dataSource.data.find(dev => dev.id === newDevice.id).seller = newDevice.deviceInfo.seller;
  }

  ngOnInit() {

    this.dS.getCount().subscribe(
      (count) => {
        this.deviceCount = count;
      }
    );

    this.dS.getAll().subscribe(
      (data) => {

        this.devices = data;
        console.log(this.devices);
        this.dataSource =  new MatTableDataSource<DeviceShort>(data);
        // ustawienie filtrowania wgłąb obiektu https://stackoverflow.com/a/57747792
        // tslint:disable-next-line:no-shadowed-variable
        this.dataSource.filterPredicate = (data: any, filter) => {
          const dataStr = JSON.stringify(data).toLowerCase();
          return dataStr.indexOf(filter) !== -1;
        };

        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
