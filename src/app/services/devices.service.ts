import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceShort } from '../models/Device/deviceShort';
import { Device } from '../models/Device/device';
import { DeviceIdentification } from '../models/Device/deviceIdentification';
import { DeviceInfo } from '../models/Device/deviceInfo';
import { DeviceStatusInfo } from '../models/Device/deviceStatusInfo';
import { environment } from 'src/environments/environment';


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
      `${environment.apiUrl}devices`,
      httpOptions
    );
  }

  getById(id: number | string): Observable<Device> {
    return this.http.get<Device>(
      `${environment.apiUrl}devices/details/${id}`, httpOptions
    );
  }

  getDeviceIdentById(id: number | string): Observable<DeviceIdentification> {
    return this.http.get<DeviceIdentification>(
      `${environment.apiUrl}devicepart/deviceidentification/${id}`, httpOptions
    );
  }

  getDeviceInfoById(id: number | string): Observable<DeviceInfo> {
    return this.http.get<DeviceInfo>(
      `${environment.apiUrl}devicepart/deviceinfo/${id}`, httpOptions
    );
  }
  getDeviceStatusById(id: number | string): Observable<DeviceStatusInfo> {
    return this.http.get<DeviceStatusInfo>(
      `${environment.apiUrl}devicepart/devicestatusinfo/${id}`, httpOptions
    );
  }

  changeDeviceCustomer(deviceId: number,  customerId: number): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}devices/changeCustomer`, {deviceId, customerId}, httpOptions);
  }

  changeDeviceSeller(deviceId: number,  sellerId: number): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}devices/changeSeller`, {deviceId, sellerId}, httpOptions);
  }

  releaseReservation(deviceId: number | string): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}devicepart/ReleaseReservation/${deviceId}`, httpOptions);
  }

  constructor(private http: HttpClient) {}
}
