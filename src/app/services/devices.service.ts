import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceShort } from '../models/Device/deviceShort';
import { Device } from '../models/Device/device';
import { DeviceIdentification } from '../models/Device/deviceIdentification';
import { DeviceInfo } from '../models/Device/deviceInfo';
import { DeviceStatusInfo } from '../models/Device/deviceStatusInfo';


const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  private devices: DeviceShort[] = [];

  getAll(): Observable<DeviceShort[]> {

    return this.http.get<DeviceShort[]>(
      'https://localhost:44313/devices',
      httpOptions
    );
  }

  getById(id: number | string): Observable<Device> {
    return this.http.get<Device>(
      `https:/localhost:44313/devices/details/${id}`, httpOptions
    );
  }

  getDeviceIdentById(id: number | string): Observable<DeviceIdentification> {
    return this.http.get<DeviceIdentification>(
      `https:/localhost:44313/devicepart/deviceidentification/${id}`, httpOptions
    );
  }

  getDeviceInfoById(id: number | string): Observable<DeviceInfo> {
    return this.http.get<DeviceInfo>(
      `https:/localhost:44313/devicepart/deviceinfo/${id}`, httpOptions
    );
  }
  getDeviceStatusById(id: number | string): Observable<DeviceStatusInfo> {
    return this.http.get<DeviceStatusInfo>(
      `https:/localhost:44313/devicepart/devicestatusinfo/${id}`, httpOptions
    );
  }

  changeDeviceCustomer(deviceId: number,  customerId: number) {
    return this.http.post('https:/localhost:44313/devices/changeCustomer', {deviceId, customerId}, httpOptions);
  }

  changeDeviceSeller(deviceId: number,  sellerId: number) {
    return this.http.post('https:/localhost:44313/devices/changeSeller', {deviceId, sellerId}, httpOptions);
  }

  releaseReservation(deviceId: number | string): Observable<number> {
    return this.http.get<number>(`https:/localhost:44313/devicepart/ReleaseReservation/${deviceId}`, httpOptions);
  }

  constructor(private http: HttpClient) {}
}
