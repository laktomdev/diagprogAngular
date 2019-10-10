import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('https://localhost:44313/customers');
  }

  getById(id: number | string): Observable<Customer> {
    return this.http.get<Customer>(
      `https:/localhost:44313/customers/details/${id}`
    );
  }

  constructor(private http: HttpClient) {}
}
