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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.query = queryParams['query'];
      this.loadUsers();
    });
  }

  private async loadUsers() {
    this.users = await this.userService.getUsers(this.query);
  }

  private async loadMoreUsers() {
    const newUsers = await await this.userService.getUsers(this.query);
    this.users.push(...newUsers);
  }

  onUsersScroll() {
    this.loadMoreUsers();
  }
}
