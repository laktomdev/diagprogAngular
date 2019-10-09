import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DevicesService } from '../services/devices.service';
import { Device } from 'src/app/models/Device/device';
import { Customer } from 'src/app/models/customer';
import { Seller } from 'src/app/models/seller';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;


  @Input()
  deviceId: number;
  customerInEditMode = false;
  sellerInEditMode = false;

  @Output() deviceChange = new EventEmitter<Device>();

  passDeviceToParrent() {
    this.deviceChange.emit(this.device);
  }


  constructor(private dS: DevicesService) { }

    onCustomerChange(newCustomer: Customer) {
      this.device.deviceInfo.customer = newCustomer;
      this.customerInEditMode = false;
      this.passDeviceToParrent();
    }

    onSellerChange(newSeller: Seller) {
      this.device.deviceInfo.seller = newSeller;
      this.sellerInEditMode = false;
      this.passDeviceToParrent();
    }

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
