import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceMessage } from '../models/Device/Message/deviceMessage';
import { MessageDef } from '../models/messageDef';
import { MessageTranslation } from '../models/messageTranslation';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class MessagesService {

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

  getMessagesDeffinitionList(): Observable<MessageDef[]> {
    return this.http.get<MessageDef[]>('https:/localhost:44313/messages/AllDefinitions');
  }

  getMessagesDeffinition(id: number | string): Observable<MessageDef> {
    return this.http.get<MessageDef>(`https:/localhost:44313/messages/DefinitionDetails/${id}`);
  }

  editTranslation(model: MessageTranslation): Observable<MessageTranslation> {
    console.log(model);
    return this.http.post<MessageTranslation>('https:/localhost:44313/messages/EditTranslation', model, httpOptions);
  }


  constructor(private http: HttpClient) {}
}
