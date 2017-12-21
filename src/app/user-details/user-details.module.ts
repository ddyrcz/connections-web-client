import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailRoutingModule } from 'app/user-details/user-detail-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { PostModule } from 'app/posts-table/post/post.module';

@NgModule({
  imports: [
    SharedModule,
    UserDetailRoutingModule,
    PostModule
  ],
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule { }
