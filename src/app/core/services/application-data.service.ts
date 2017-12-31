import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { isDevMode } from '@angular/core';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ApplicationDataService {

  private _loggedInUser: User | null

  get loggedInUser(): User | null {
    let user = localStorage.getItem('loggedInUser')

    if (user) {
      const userObject = plainToClass(User, JSON.parse(user) as User)
      return userObject
    }

    return null
  }

  set loggedInUser(user: User | null) {
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('loggedInUser')
    }
  }
}
