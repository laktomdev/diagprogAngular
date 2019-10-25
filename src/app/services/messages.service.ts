import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DeviceMessage } from '../models/Device/Message/deviceMessage';
import { MessageDef } from '../models/messageDef';
import { MessageTranslation } from '../models/messageTranslation';
import { map, switchMap, delay } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class MessagesService {

  private readonly refreshToken$ = new BehaviorSubject(undefined);
  private readonly task$ = this.refreshToken$.pipe(
    switchMap(() => this.http.get('/api/tasks/foo')));

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
    return this.http.get<MessageDef[]>('https:/localhost:44313/messages/AllDefinitions').pipe();
  }

  getMessagesDeffinition(id: number | string): Observable<MessageDef> {
    return this.http.get<MessageDef>(`https:/localhost:44313/messages/DefinitionDetails/${id}`);
  }

  editMessageDefinition(model: MessageDef): Observable<number> {
    return  this.http.post<number>('https:/localhost:44313/messages/EditMessageDef', model, httpOptions);
  }

  addMessageDefinition(model: MessageDef): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/AddMessageDef', model, httpOptions);
  }

  editTranslation(model: MessageTranslation) {
    return this.http.post<number>('https:/localhost:44313/messages/EditTranslation', model, httpOptions);
  }

  constructor(private http: HttpClient) {}
}
