import { Time } from '@angular/common';

export interface DeviceStatusInfo {
  createDate: Time;
  firstActivation: Time;
  lastActivation: Time;
  reservationDate: Time;
}
