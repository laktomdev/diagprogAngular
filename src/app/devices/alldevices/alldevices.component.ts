import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { DeviceShort } from 'src/app/models/Device/deviceShort';

@Component({
  selector: 'app-alldevices',
  templateUrl: './alldevices.component.html',
  styleUrls: ['./alldevices.component.scss']
})
export class AlldevicesComponent implements OnInit {

  constructor(private dS: DevicesService) { }

  devices: DeviceShort[];

  ngOnInit() {
    this.downloadDevices();
  }


  downloadDevices(){
    this.dS.getAll().subscribe(
      (data) => {
        this.devices = data;
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
