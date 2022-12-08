// login.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  template: `<a [hidden]="needsLogin()">Login</a>`
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }

}
