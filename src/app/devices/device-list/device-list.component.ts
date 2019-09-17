import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Device } from 'src/app/models/device';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {


  devices: Device[];
  deviceCount: any;
  dataSource: MatTableDataSource<Device> = new MatTableDataSource<Device>(this.devices);
  displayedColumns: string[] = ['deviceNumber', 'customerName', 'sellerName', 'packageName', 'actions'];
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
        this.dataSource =  new MatTableDataSource<Device>(data);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
