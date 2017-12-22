import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user.model';

@Injectable()
export class ApplicationDataService {

  loggedInUser: User = {
    avatarUrl: 'https://s3.envato.com/files/232113021/preview.jpg ',
    id: "1",
    name: 'Jan',
    lastname: 'Kowalski'
  };

  constructor() { }

}
