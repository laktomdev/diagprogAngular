import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DeviceMessage } from '../models/Device/Message/deviceMessage';
import { MessageDef } from '../models/messageDef';
import { MessageTranslationSubmit } from '../models/MessageTranslationSubmit';
import { DeviceShort } from '../models/Device/deviceShort';
import { MessageTranslation } from '../models/messageTranslation';
import { MessageDevice } from '../models/messageDevice';
import { environment } from 'src/environments/environment';

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
      `${environment.apiUrl}messages/DeviceMessagesOutdated/${id}`, httpOptions
    );
  }

  getMessagesInDeviceActive(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `${environment.apiUrl}messages/DeviceMessagesActive/${id}`, httpOptions
    );
  }

  getMessagesInDevice(id: number | string): Observable<DeviceMessage[]> {
    return this.http.get<DeviceMessage[]>(
      `${environment.apiUrl}messages/DeviceMessages/${id}`, httpOptions
    );
  }

  getAllMessageDeffinitions(): Observable<MessageDef[]> {
    return this.http.get<MessageDef[]>(`${environment.apiUrl}messages/AllDefinitions`, httpOptions);
  }

  getMessagesDeffinitionDetails(id: number | string): Observable<MessageDef> {
    return this.http.get<MessageDef>(`${environment.apiUrl}messages/DefinitionDetails/${id}`, httpOptions);
  }

  editMessageDefinition(model: MessageDef): Observable<number> {
    return  this.http.post<number>(`${environment.apiUrl}messages/EditMessageDef`, model, httpOptions);
  }

  addMessageDefinition(model: MessageDef): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}messages/AddMessageDef`, model, httpOptions);
  }

  editTranslation(model: MessageTranslationSubmit): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}messages/EditTranslation`, model, httpOptions);
  }

  addTranslation(model: MessageTranslationSubmit): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}messages/AddTranslationToMessage`, model, httpOptions);
  }

  getMessageDevices(msgId: number): Observable<MessageDevice[]> {
    return this.http.get<MessageDevice[]>(`${environment.apiUrl}messages/MessageDevices/${msgId}`, httpOptions);
  }

  getNotMessageDevices(ignoreIds: number[]): Observable<DeviceShort[]> {
    return this.http.post<DeviceShort[]>(`${environment.apiUrl}messages/NotMessageDevices/`, ignoreIds, httpOptions);
  }

  addMessageToMultipleDevices(ids: number[], messageId: number): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}messages/AddMessageToDevices/`, {ids, messageId}, httpOptions);
  }
  removeMessageFromMultipleDevices(ids: number[], messageId: number): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}messages/RemoveMessageFromDevices/`, {ids, messageId}, httpOptions);
  }

  changeDefaultLanguage(messageDefId: number, defaultLanguageId: number): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}messages/ChangeDefaultTranslation/`, {messageDefId, defaultLanguageId},
     httpOptions);
  }

  getTranslations(messageId: number | string): Observable<MessageTranslation[]> {
    console.log('ostatni ' + messageId);
    return this.http.get<MessageTranslation[]>(`${environment.apiUrl}messages/MessageTranslations/${messageId}`, httpOptions);
  }

  constructor(private http: HttpClient) {}
}
