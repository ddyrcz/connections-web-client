import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { AuthService } from 'app/core/http/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  email: string
  password: string

  ngOnInit() { }

  async login() {
    await this.auth.login(this.email, this.password);
    this.router.navigateByUrl("")
    return false
  }
}
