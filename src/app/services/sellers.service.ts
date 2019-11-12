import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Seller } from '../models/seller';


const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class SellersService {
  private customers: Seller[] = [];

  getAll(): Observable<Seller[]> {
    return this.http.get<Seller[]>('https://localhost:44313/sellers', httpOptions);
  }

  getById(id: number | string): Observable<Seller> {
    return this.http.get<Seller>(
      `https:/localhost:44313/sellers/details/${id}`, httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}
