import { Seller } from '../seller';
import { Customer } from '../customer';
import { Time } from '@angular/common';

export interface DeviceShort {
  id: number;
  deviceNumber: string;
  packageName: string;
  customer: Customer;
  seller: Seller;
  timelock: Time;
  lastActivation: Time;
  language: string;
}
