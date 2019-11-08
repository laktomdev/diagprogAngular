import { Time } from '@angular/common';
import { DeviceStatus } from './deviceStatus';

export interface DeviceStatusInfo {
  createDate: Time;
  firstActivation: Time;
  lastActivation: Time;
  reservationDate: Time;
  status: number;
}
