import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/core/http/user.service';
import { User } from 'app/shared/model/user.model';

@Component({
  selector: 'app-users-search-engine',
  templateUrl: './users-search-engine.component.html',
  styleUrls: ['./users-search-engine.component.scss']
})
export class UsersSearchEngineComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  myControl: FormControl = new FormControl();

  users: User[];

  ngOnInit() {
    this.myControl.valueChanges
      .debounceTime(500)
      .subscribe(async (query: string) => {
        this.users = await this.userService.getUsers(query);
      });
  }
}
