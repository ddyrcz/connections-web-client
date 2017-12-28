import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { AuthService } from 'app/core/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService) {
  }

  email: string
  password: string

  ngOnInit() { }

  async login() {
    await this.auth.login(this.email, this.password);
    return false
  }
}
