import { Seller } from '../seller';
import { Customer } from '../customer';

export interface DeviceShort {
  id: number;
  deviceNumber: string;
  packageName: string;
  customer: Customer;
  seller: Seller;
}
