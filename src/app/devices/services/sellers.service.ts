import { Injectable } from '@angular/core';
import { Seller } from 'src/app/models/seller';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellersService {
  private customers: Seller[] = [];

  getAll(): Observable<Seller[]> {
    return this.http.get<Seller[]>('https://localhost:44313/sellers');
  }

  getById(id: number | string): Observable<Seller> {
    return this.http.get<Seller>(
      `https:/localhost:44313/sellers/details/${id}`
    );
  }

  constructor(private http: HttpClient) {}
}
