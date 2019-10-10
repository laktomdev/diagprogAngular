import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) { }

  user: any = {};
  response: any = {};

  ngOnInit() {}

  login() {
    this.authService.login(this.user).subscribe();
  }

  onSubmit()  {

    this.login();
  }
}
