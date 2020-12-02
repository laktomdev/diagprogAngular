import { Time } from '@angular/common';
import { DeviceStatus } from './deviceStatus';
import { ServerLock } from '../serverLock';

export interface DeviceStatusInfo {
  createDate: Time;
  firstActivation: Time;
  lastActivation: Time;
  reservationDate: Time;
  status: DeviceStatus;
  serverLocks: ServerLock[];
}
