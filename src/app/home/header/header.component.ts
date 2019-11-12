import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authorization/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private router: Router, private alertyfy: AlertifyService,
              private location: Location) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertyfy.success('Logged in successfully');
    }, error => {
      this.alertyfy.error('Login failed');
    }, () => {
      location.reload();
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    console.log('logout');
    this.authService.logOut();
    this.alertyfy.message('Logged out');
    location.reload();
  }
}
