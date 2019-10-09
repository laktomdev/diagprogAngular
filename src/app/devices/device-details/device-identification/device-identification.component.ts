import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../../services/devices.service';
import { DeviceIdentification } from 'src/app/models/Device/deviceIdentification';

@Component({
  selector: 'app-device-identification',
  templateUrl: './device-identification.component.html',
  styleUrls: ['./device-identification.component.scss']
})
export class DeviceIdentificationComponent implements OnInit {

  deviceIdent: DeviceIdentification;

  @Input() deviceId: number;

  constructor(private dS: DevicesService) { }

  ngOnInit() {
    this.dS.getDeviceIdentById(Number(this.deviceId)).subscribe(
      (data) => {
        this.deviceIdent = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
