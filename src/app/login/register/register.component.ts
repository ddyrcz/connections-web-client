import { Component, OnInit } from '@angular/core';
import { UsersListRoutingModule } from 'app/users-list/users-list-routing.module';
import { User } from 'app/shared/model/user.model';
import { Router } from '@angular/router';
import { GrowlService } from 'app/core/growl/growl.service';
import { AuthService } from 'app/core/http/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  prepareUser(): User {
    const user = new User();

    user.name = this.name
    user.lastname = this.lastname
    user.email = this.email
    user.password = this.password
    user.createdAt = new Date()

    return user
  }

  name: string
  lastname: string
  email: string
  password: string
  repeatedPassword: string

  constructor(private auth: AuthService,
    private router: Router,
    private growl: GrowlService) { }

  ngOnInit() {
  }

  async register() {
    const user = this.prepareUser();
    await this.auth.register(user)

    this.growl.showSuccess('Konto utworzone')

    this.router.navigateByUrl('login')
  }

  passwordMismatch() {
    return this.password != this.repeatedPassword
  }
}
