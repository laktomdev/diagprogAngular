import { Injectable } from '@angular/core';
import { Device } from '../models/device';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DevicesService {

private devices: Device[] = [

];

getAll(): Observable<Device[]> {
  return this.http.get<Device[]>('https://localhost:44313/devices');
}

getById(id: number | string): Observable<Device> {
  return this.http.get<Device>(`https:/localhost:44313/devices/details/${id}`);
}

getCount(): Observable<number> {
  return this.http.get<number>('https:/localhost:44313/devices/count');
}

  constructor(private http: HttpClient) { }
}
