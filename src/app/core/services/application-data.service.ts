import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user.model';

@Injectable()
export class ApplicationDataService {

  loggedInUser: User = {
    avatarUrl: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
    _id: "59201bfeec36dc29007cab1e",
    name: 'Dawid',
    lastname: 'Dyrcz',
    following: [
      "59201c551318b2333cab375e",
      "5a43911d1ef3e2d2c7ba8422"
    ]
  };

  constructor() { }

}
