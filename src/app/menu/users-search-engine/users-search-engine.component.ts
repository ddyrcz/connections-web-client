import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/core/http/user.service';
import { User } from 'app/shared/model/user.model';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-users-search-engine',
  templateUrl: './users-search-engine.component.html',
  styleUrls: ['./users-search-engine.component.scss'],
  providers: [UserService]
})
export class UsersSearchEngineComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  query: string;

  getUrlQuery() {
    return {
      query: this.query
    };
  }

  @ViewChild('queryInput', { read: MatAutocompleteTrigger }) queryInputTrigger: MatAutocompleteTrigger;

  myControl: FormControl = new FormControl();

  users: User[];

  onShowAllClicked() {
    this.queryInputTrigger.closePanel()
  }

  ngOnInit() {
    this.myControl.valueChanges
      .debounceTime(200)
      .subscribe(async (query: string) => {
        this.users = await this.userService.getUsers(query);
      });
  }
}
