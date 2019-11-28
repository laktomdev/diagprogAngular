import { Seller } from '../seller';
import { Customer } from '../customer';
import { Time } from '@angular/common';

export interface DeviceShort {
  id: number;
  deviceNumber: string;
  packageName: string;
  customerName: string;
  sellerName: string;
  timeLock: Time;
  lastActivation: Time;
  language: string;
}
