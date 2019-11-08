import { Component, OnInit, Input } from '@angular/core';
import { DeviceStatusInfo } from 'src/app/models/Device/deviceStatusInfo';
import { DevicesService } from 'src/app/services/devices.service';


@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {

  deviceStatus: DeviceStatusInfo;

  @Input() deviceId: number;

  constructor(private dS: DevicesService) { }

  ngOnInit() {
    this.dS.getDeviceStatusById(Number(this.deviceId)).subscribe(
      (data) => {
        this.deviceStatus = data;

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
