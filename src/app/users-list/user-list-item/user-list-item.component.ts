import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/shared/model/user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  constructor() { }

  @Input()
  user: User;

  ngOnInit() {
  }

}
