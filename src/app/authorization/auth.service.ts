import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:44313/auth/';
  jwtHelper = new JwtHelperService();

  decodedToken: any;

  constructor(private http: HttpClient) {}

  login(model: any) {


    return this.http.post(this.baseUrl + 'login', model, {responseType: 'json'}).pipe(
        map((response: any) => {
          console.log(response);
          const token = response;
          if (token) {
            localStorage.setItem('token', token);
            this.decodedToken = this.jwtHelper.decodeToken(token);
            console.log(this.decodedToken);
          }
        })
      );
  }

}
