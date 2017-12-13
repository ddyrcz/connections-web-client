import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailRoutingModule } from 'app/user-details/user-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserDetailRoutingModule
  ],
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule { }
