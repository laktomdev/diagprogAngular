import { DeviceShort } from './Device/deviceShort';
import { Time } from '@angular/common';

export interface MessageDevice {
  diagprog: DeviceShort;
  downloadDate: Time;
}
