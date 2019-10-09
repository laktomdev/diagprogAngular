import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DevicesService } from '../services/devices.service';
import { Device } from 'src/app/models/Device/device';
import { DeviceInfo } from 'src/app/models/Device/deviceInfo';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;


  @Input()
  deviceId: number;


  @Output() deviceChange = new EventEmitter<Device>();

  passDeviceToListComponent() {
    console.log('device changed sent to device-list-component');
    this.deviceChange.emit(this.device);
  }

  onDeviceInfoChange(newInfo: DeviceInfo) {
    console.log('new deviceInfo received');
    this.device.deviceInfo = newInfo;
    this.passDeviceToListComponent();
  }


  constructor(private dS: DevicesService) { }



  ngOnInit() {
    this.dS.getById(Number(this.deviceId)).subscribe(
      (data) => {
        this.device = data;
      },
      (error) => {
        console.log(error);
      }
    );


  }
}
