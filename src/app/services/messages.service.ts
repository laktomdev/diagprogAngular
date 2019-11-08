import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DeviceMessage } from '../models/Device/Message/deviceMessage';
import { MessageDef } from '../models/messageDef';
import { MessageTranslationSubmit } from '../models/MessageTranslationSubmit';
import { DeviceShort } from '../models/Device/deviceShort';
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

  getMessageDevices(msgId: number): Observable<DeviceShort[]> {
    return this.http.get<DeviceShort[]>(`https:/localhost:44313/messages/MessageDevices/${msgId}`);
  }

  getNotMessageDevices(ignoreIds: number[]): Observable<DeviceShort[]> {
    return this.http.post<DeviceShort[]>('https:/localhost:44313/messages/NotMessageDevices/', ignoreIds);
  }

  addMessageToMultipleDevices(ids: number[], messageId: number): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/AddMessageToDevices/', {ids, messageId});
  }

  removeMessageFromMultipleDevices(ids: number[], messageId: number): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/RemoveMessageFromDevices/', {ids, messageId});
  }

  changeDefaultLanguage(messageDefId: number, defaultLanguageId: number): Observable<DeviceShort[]> {
    return this.http.post<DeviceShort[]>('https:/localhost:44313/messages/ChangeDefaultTranslation/', {messageDefId, defaultLanguageId});
  }

  getTranslations(messageId: number | string): Observable<MessageTranslation[]> {
    console.log('ostatni ' + messageId);
    return this.http.get<MessageTranslation[]>(`https:/localhost:44313/messages/MessageTranslations/${messageId}`);
  }

  constructor(private http: HttpClient) {}
}
