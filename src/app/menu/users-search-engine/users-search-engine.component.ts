import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('queryInput', { read: MatAutocompleteTrigger }) queryInputTrigger: MatAutocompleteTrigger;

  @ViewChild('queryInput') queryInput: ElementRef;

  queryInputControl: FormControl = new FormControl();

  users: User[];

  onShowAllClicked() {
    this.queryInputTrigger.closePanel();
  }

  onUserSelected() {
    this.queryInputControl.setValue('');
    this.queryInput.nativeElement.blur();
  }

  ngOnInit() {
    this.queryInputControl.valueChanges
      .debounceTime(200)
      .subscribe(async (query: string) => {
        if (query) {
          this.users = await this.userService.getUsers(query);
        } else {
          this.users = []
        }
      });
  }
}
