import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User(1, 'Dawid', 'Dyrcz', '', 'dd', null);
  }

  login() {
    console.log(this.user);
  }
}
