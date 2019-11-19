import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServerLock } from '../models/serverLock';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class LockService {

  constructor(private http: HttpClient) {}

  lockDevice(serverLock: ServerLock) {
    return this.http.post<number>(`${environment.apiUrl}serverLocks/LockDevice`, serverLock, httpOptions);
  }

  unlockDevice(serverLock: ServerLock) {
    return this.http.post<number>(`${environment.apiUrl}serverLocks/UnlockDevice`, serverLock, httpOptions);
  }
}
