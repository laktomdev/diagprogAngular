import { Injectable } from '@angular/core';
import { Device } from '../../models/Device/device';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceShort } from '../../models/Device/deviceShort';
import { DeviceIdentification } from 'src/app/models/Device/deviceIdentification';
import { DeviceInfo } from 'src/app/models/Device/deviceInfo';
import { DeviceStatusInfo } from 'src/app/models/Device/deviceStatusInfo';

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
      `https:/localhost:44313/devices/details/${id}`
    );
  }

  getDeviceIdentById(id: number | string): Observable<DeviceIdentification> {
    return this.http.get<DeviceIdentification>(
      `https:/localhost:44313/devicepart/deviceidentification/${id}`
    );
  }

  getDeviceInfoById(id: number | string): Observable<DeviceInfo> {
    return this.http.get<DeviceInfo>(
      `https:/localhost:44313/devicepart/deviceinfo/${id}`
    );
  }
  getDeviceStatusById(id: number | string): Observable<DeviceStatusInfo> {
    return this.http.get<DeviceStatusInfo>(
      `https:/localhost:44313/devicepart/devicestatusinfo/${id}`
    );
  }

  getCount(): Observable<number> {
    return this.http.get<number>('https:/localhost:44313/devices/count');
  }

  constructor(private http: HttpClient) {}
}
