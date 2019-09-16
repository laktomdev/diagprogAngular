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

getAll(): Observable<any>{
  return this.http.get("https://localhost:44313/devices");
}

getCount(): any{
  return this.http.get("https:/localhost:44313/devices/count");
}

  constructor(private http: HttpClient) { }
}
