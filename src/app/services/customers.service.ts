import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

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
    return this.http.get<Customer[]>(`${environment.apiUrl}customers`, httpOptions);
  }

  getById(id: number | string): Observable<Customer> {
    return this.http.get<Customer>(
      `${environment.apiUrl}customers/details/${id}`, httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}
