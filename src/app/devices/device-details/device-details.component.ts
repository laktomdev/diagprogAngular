import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from 'src/app/models/Device/device';
import { DeviceInfo } from 'src/app/models/Device/deviceInfo';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;


  @Input()deviceId: number;
  @Output()refreshListEmitter = new EventEmitter<number>();


  refresListTriggered(deviceIdent: number) {
    this.refreshListEmitter.emit(deviceIdent);
  }

  constructor(private dS: DevicesService) { }

  ngOnInit() {
    // this.dS.getById(Number(this.deviceId)).subscribe(
    //   (data) => {
    //     this.device = data;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );


  }
}
