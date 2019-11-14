import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Language } from '../models/language';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  getAll(): Observable<Language[]> {
    return this.http.get<Language[]>(
      `${environment.apiUrl}languages`, httpOptions
    );
  }
  constructor(private http: HttpClient) {}
}
