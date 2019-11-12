import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authorization/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
     // this.alertyfy.success('Logged in successfully');
    }, error => {
     // this.alertyfy.error(error);
    }, () => {
      const current = this.router.getCurrentNavigation();
      this.router.navigateByUrl(current.finalUrl.toString());
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    console.log('logout');
    this.authService.logOut();
    // this.alertyfy.message('Logged out');
    // this.router.navigate(['/home']);
  }
}
