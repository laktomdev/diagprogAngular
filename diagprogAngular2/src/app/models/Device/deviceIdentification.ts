import { BootVersion } from './Versions/bootVersion';
import { RealSN } from './Versions/realSN';
import { HardwareVersion } from './Versions/hardwareVersion';
import { DeviceNumber } from './Versions/deviceNumber';

export interface DeviceIdentification {

  id: number;
  deviceNumber: DeviceNumber;
  realSN: RealSN;
  bootVersion: BootVersion;
  hardwareVersion: HardwareVersion;

}
