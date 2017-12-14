import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/model/user.model';
import { UserService } from 'app/core/http/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [UserService]
})
export class UsersListComponent implements OnInit {

  private query: string;

  users: User[];

  constructor(route: ActivatedRoute,
    private readonly userService: UserService) {
    route.queryParams.subscribe(queryParams => {
      this.query = queryParams['query'];
      this.loadUsers();
    });
  }

  async ngOnInit() {
    await this.loadUsers();
  }

  private async loadUsers() {
    this.users = await this.userService.getUsers(this.query);
  }

}
