import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public service: AuthenticationService) {
    this.message = '';
  }

  ngOnInit() {
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.service.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(() => (this.message = ''), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.service.logout();
    return false;
  }
}
