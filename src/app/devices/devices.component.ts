import { Component, OnInit, ViewChild } from '@angular/core';
import {Device} from '../models/device';
import { DevicesService } from './devices.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})

export class DevicesComponent implements OnInit {

  devices: Device[];
  deviceCount : any;
  dataSource: MatTableDataSource<Device> = new MatTableDataSource<Device>(this.devices);
  displayedColumns: string[] = ['deviceNumber', 'customerName', 'sellerName', 'packageName'];
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
