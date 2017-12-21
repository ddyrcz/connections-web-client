import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailRoutingModule } from 'app/user-details/user-detail-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from 'app/shared/shared.module';
import { PostModule } from 'app/posts-table/post/post.module';

@NgModule({
  imports: [
    SharedModule,
    UserDetailRoutingModule,
    PostModule,
    InfiniteScrollModule
  ],
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule { }
