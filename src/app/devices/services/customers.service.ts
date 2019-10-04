import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Customer } from '../../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customers: Customer[] = [
    {id: 1, name: 'abcdef'},
    {id: 2, name: 'efghij'}
  ];

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('https://localhost:44313/customers');
  }

  getById(id: number | string): Observable<Customer> {
    return this.http.get<Customer>(`https:/localhost:44313/customers/details/${id}`);
  }


  constructor(private http: HttpClient) { }
}
