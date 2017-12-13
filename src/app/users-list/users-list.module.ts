import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { UsersListRoutingModule } from 'app/users-list/users-list-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UsersListRoutingModule
  ],
  declarations: [UsersListComponent],
  exports: [
    UsersListComponent
  ]
})
export class UsersListModule { }
