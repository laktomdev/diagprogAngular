import { Time } from '@angular/common';
import { LockStatus } from './lockStatus';
import { StatusInformation } from './statusInformation';

export interface ServerLock {
  createDate: Time;
  deviceId: number;
  blockDate?: Time;
  lockStatus: LockStatus;
  statusInformation: StatusInformation;
}
