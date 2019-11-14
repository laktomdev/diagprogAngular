import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DeviceMessage } from '../models/Device/Message/deviceMessage';
import { MessageDef } from '../models/messageDef';
import { MessageTranslationSubmit } from '../models/MessageTranslationSubmit';
import { DeviceShort } from '../models/Device/deviceShort';
import { MessageTranslation } from '../models/messageTranslation';
import { MessageDevice } from '../models/messageDevice';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})


export class MessagesService {

  getMessagesInDeviceOutdated(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessagesOutdated/${id}`, httpOptions
    );
  }

  getMessagesInDeviceActive(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessagesActive/${id}`, httpOptions
    );
  }

  getMessagesInDevice(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `https:/localhost:44313/messages/DeviceMessages/${id}`, httpOptions
    );
  }

  getAllMessageDeffinitions(): Observable<MessageDef[]> {
    return this.http.get<MessageDef[]>('https:/localhost:44313/messages/AllDefinitions', httpOptions);
  }

  getMessagesDeffinitionDetails(id: number | string): Observable<MessageDef> {
    return this.http.get<MessageDef>(`https:/localhost:44313/messages/DefinitionDetails/${id}`, httpOptions);
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

  getMessageDevices(msgId: number): Observable<MessageDevice[]> {
    return this.http.get<MessageDevice[]>(`https:/localhost:44313/messages/MessageDevices/${msgId}`, httpOptions);
  }

  getNotMessageDevices(ignoreIds: number[]): Observable<DeviceShort[]> {
    return this.http.post<DeviceShort[]>('https:/localhost:44313/messages/NotMessageDevices/', ignoreIds, httpOptions);
  }

  addMessageToMultipleDevices(ids: number[], messageId: number): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/AddMessageToDevices/', {ids, messageId}, httpOptions);
  }

  removeMessageFromMultipleDevices(ids: number[], messageId: number): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/RemoveMessageFromDevices/', {ids, messageId}, httpOptions);
  }

  changeDefaultLanguage(messageDefId: number, defaultLanguageId: number): Observable<number> {
    return this.http.post<number>('https:/localhost:44313/messages/ChangeDefaultTranslation/', {messageDefId, defaultLanguageId},
     httpOptions);
  }

  getTranslations(messageId: number | string): Observable<MessageTranslation[]> {
    console.log('ostatni ' + messageId);
    return this.http.get<MessageTranslation[]>(`https:/localhost:44313/messages/MessageTranslations/${messageId}`, httpOptions);
  }

  constructor(private http: HttpClient) {}
}
