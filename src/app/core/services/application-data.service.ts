import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user.model';

@Injectable()
export class ApplicationDataService {

  loggedInUser: User = {
    avatarUrl: 'https://i.pinimg.com/originals/e9/60/a4/e960a4fec70917986363f745e74b2b5f.png',
    _id: "5a43911d1ef3e2d2c7ba8422",
    name: 'Alicja',
    lastname: 'Czornik'
  };

  constructor() { }

}
