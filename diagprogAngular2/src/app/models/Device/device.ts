import { DeviceIdentification } from './deviceIdentification';
import { DeviceInfo } from './deviceInfo';
import { DeviceStatusInfo } from './deviceStatusInfo';

export interface Device {
  id: number;
  deviceIdentification: DeviceIdentification;
  deviceInfo: DeviceInfo;
  deviceStatusInfo: DeviceStatusInfo;
}
