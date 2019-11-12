import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('https://localhost:44313/customers', httpOptions);
  }

  getById(id: number | string): Observable<Customer> {
    return this.http.get<Customer>(
      `https:/localhost:44313/customers/details/${id}`, httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}
