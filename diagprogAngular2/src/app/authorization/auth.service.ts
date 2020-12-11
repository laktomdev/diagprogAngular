import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `${environment.apiUrl}auth/`;
  jwtHelper = new JwtHelperService();

  decodedToken: any;

  constructor(private http: HttpClient) {}

  login(model: any) {
    console.log('probuje sie zalogowac');
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

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logOut() {
    localStorage.removeItem('token');
  }

  getUserName() {
    const token = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(token);
    return this.decodedToken.uniqueName;
  }

}
