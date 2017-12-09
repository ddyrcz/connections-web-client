import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor() { }

  ngOnInit() {

  }

  login() {
    console.log(this.user);
  }
}
