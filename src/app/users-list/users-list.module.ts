import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { UsersListRoutingModule } from 'app/users-list/users-list-routing.module';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    SharedModule,
    UsersListRoutingModule,
    RouterModule.forChild([]),
    InfiniteScrollModule
  ],
  declarations: [UsersListComponent, UserListItemComponent],
  exports: [
    UsersListComponent
  ]
})
export class UsersListModule { }
