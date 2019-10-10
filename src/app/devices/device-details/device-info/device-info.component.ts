import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeviceInfo } from 'src/app/models/Device/deviceInfo';
import { Customer } from 'src/app/models/customer';
import { Seller } from 'src/app/models/seller';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss']
})
export class DeviceInfoComponent implements OnInit {

  deviceInfo: DeviceInfo;
  customerInEditMode = false;
  sellerInEditMode = false;

  @Input() deviceId: number;

  @Output() deviceInfoChange = new EventEmitter<DeviceInfo>();

  passDeviceInfoToDetailsComponent() {
    console.log('deviceInfo changed sent to device-details-component');
    this.deviceInfoChange.emit(this.deviceInfo);
  }

  onCustomerChange(newCustomer: Customer) {
    console.log('new customer received');
    this.deviceInfo.customer = newCustomer;
    this.customerInEditMode = false;
    this.passDeviceInfoToDetailsComponent();
  }

  onSellerChange(newSeller: Seller) {
    console.log('new seller received');
    this.deviceInfo.seller = newSeller;
    this.sellerInEditMode = false;
    this.passDeviceInfoToDetailsComponent();
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
