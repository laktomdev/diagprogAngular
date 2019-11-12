import { Component, OnInit, Input } from '@angular/core';
import { DeviceStatusInfo } from 'src/app/models/Device/deviceStatusInfo';
import { DevicesService } from 'src/app/services/devices.service';
import { DeviceStatus } from 'src/app/models/Device/deviceStatus';


@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {

  deviceStatus: DeviceStatusInfo;
  statusEnum = DeviceStatus;
  @Input() deviceId: number;

  constructor(private dS: DevicesService) { }

  ngOnInit() {
    this.dS.getDeviceStatusById(Number(this.deviceId)).subscribe(
      (data) => {
        this.deviceStatus = data;
        console.log(this.deviceStatus);

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
