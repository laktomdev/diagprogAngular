import { Time } from '@angular/common';

export interface DeviceMessage {
  downloadDate: Time;
  validFrom: Time;
  validTo: Time;
  description: string;
}
