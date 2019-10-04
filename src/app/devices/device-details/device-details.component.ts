import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Device } from 'src/app/models/Device/device';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;

  @Input()
  customId: number;
  isInEditMode = false;

  @Output() deviceChange = new EventEmitter<Device>();

  passDeviceToParrent() {
    this.deviceChange.emit(this.device);
  }


  constructor(private dS: DevicesService
    ) { }

    onCustomerChange(newCustomer: Customer) {
      this.device.deviceInfo.customer = newCustomer;
      this.isInEditMode = false;
      this.passDeviceToParrent();
    }

  ngOnInit() {
    this.dS.getById(Number(this.customId)).subscribe(
      (data) => {
        this.device = data;
        console.log(this.device);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
