import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Device } from 'src/app/models/device';
import { DevicesService } from '../devices.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

  dataSource: MatTableDataSource<Device>;
  devices: Device[];
  columnsToDisplay = ['deviceNumber', 'seller.name', 'customer.name', 'packageName'];
  expandedElement: Device | null;
  deviceCount: number;



  constructor(private dS: DevicesService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
        this.dataSource =  new MatTableDataSource<Device>(data);

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
