import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DeviceMessage } from '../models/Device/Message/deviceMessage';
import { MessageDef } from '../models/messageDef';
import { MessageTranslation } from '../models/messageTranslation';
import { map, switchMap, delay } from 'rxjs/operators';
import { MessageTranslationSubmit } from '../models/MessageTranslationSubmit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class MessagesService {

  getMessagesInDeviceOutdated(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessagesOutdated/${id}`
    );
  }

  getMessagesInDeviceActive(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessagesActive/${id}`
    );
  }

  getMessagesInDevice(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessages/${id}`
    );
  }

  getAllMessageDeffinitions(): Observable<MessageDef[]> {
    return this.http.get<MessageDef[]>('https:/localhost:44313/messages/AllDefinitions').pipe();
  }

  getMessagesDeffinitionDetails(id: number | string): Observable<MessageDef> {
    return this.http.get<MessageDef>(`https:/localhost:44313/messages/DefinitionDetails/${id}`);
  }

  editMessageDefinition(model: MessageDef): Observable<number> {
    return  this.http.post<number>('https:/localhost:44313/messages/EditMessageDef', model, httpOptions);
  }

  addMessageDefinition(model: MessageDef): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/AddMessageDef', model, httpOptions);
  }

  editTranslation(model: MessageTranslationSubmit): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/EditTranslation', model, httpOptions);
  }

  addTranslation(model: MessageTranslationSubmit): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/AddTranslationToMessage', model, httpOptions);
  }

  constructor(private http: HttpClient) {}
}
