import { Customer } from './customer';
import { Seller } from './seller';

export interface Device {
  id: number;
  deviceNumber: string;
  packageName: string;
  customer: Customer;
  seller: Seller;
}
