import { Injectable } from '@angular/core';
import { Device } from '../models/Device/device';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceShort } from '../models/Device/deviceShort';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};


@Injectable({
  providedIn: 'root'
})


export class DevicesService {


private devices: DeviceShort[] = [

];

getAll(): Observable<DeviceShort[]> {
   return this.http.get<DeviceShort[]>('https://localhost:44313/devices', httpOptions);
}

getById(id: number | string): Observable<Device> {
  return this.http.get<Device>(`https:/localhost:44313/devices/details/${id}`);
}

getCount(): Observable<number> {
  return this.http.get<number>('https:/localhost:44313/devices/count');
}

  constructor(private http: HttpClient) { }
}
