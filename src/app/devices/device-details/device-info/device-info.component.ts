import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeviceInfo } from 'src/app/models/Device/deviceInfo';
import { DevicesService } from 'src/app/services/devices.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRoleDirective } from 'src/app/directives/user-role.directive';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss'],
})
export class DeviceInfoComponent implements OnInit {

  deviceInfo: DeviceInfo;
  customerInEditMode = false;
  sellerInEditMode = false;


  @Input() deviceId: number;
  @Output() refreshListEmitter = new EventEmitter<number>();

  refreshListTriggered(deviceIdent: number) {
    this.refreshListEmitter.emit(deviceIdent);
  }

  constructor(private dS: DevicesService) { }

  ngOnInit() {
    this.dS.getDeviceInfoById(Number(this.deviceId)).subscribe(
      (data) => {
        this.deviceInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
