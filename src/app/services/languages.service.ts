import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Language } from '../models/language';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  getAll(): Observable<Language[]> {
    return this.http.get<Language[]>(
      'https://localhost:44313/languages'
    );
  }
  constructor(private http: HttpClient) {}
}
