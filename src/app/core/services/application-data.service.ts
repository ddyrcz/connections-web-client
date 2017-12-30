import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { isDevMode } from '@angular/core';

@Injectable()
export class ApplicationDataService {

  loggedInUser: User

  constructor() {
    if (isDevMode()) {
      this.loggedInUser = new User();
    }
  }

}
