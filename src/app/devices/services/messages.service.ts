import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceMessage } from 'src/app/models/Device/Message/deviceMessage';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  getMessagesInDeviceCount(id: number | string): Observable<number> {
    return this.http.get<number>(
      `https:/localhost:44313/messages/GetMessagesInDeviceCount/${id}`
    );
  }

  getMessagesInDeviceFreshCount(id: number | string): Observable<number> {
    return this.http.get<number>(
      `https:/localhost:44313/messages/GetMessagesInDeviceCountFresh/${id}`
    );
  }

  getMessagesInDeviceOutdatedCount(id: number | string): Observable<number> {
    return this.http.get<number>(
      `https:/localhost:44313/messages/GetMessagesInDeviceCountOutdated/${id}`
    );
  }

  getMessagesInDeviceOutdatedList(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessagesOutdated/${id}`
    );
  }

  getMessagesInDeviceFreshList(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessagesFresh/${id}`
    );
  }

  getMessagesInDeviceList(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessages/${id}`
    );
  }


  constructor(private http: HttpClient) {}
}
