import { Customer } from '../customer';
import { Seller } from '../seller';
import { Package } from '../package';
import { Time } from '@angular/common';

export interface DeviceInfo {
  id: number;
  customer: Customer;
  seller: Seller;
  package: Package;
  timeLock: Time;
}
