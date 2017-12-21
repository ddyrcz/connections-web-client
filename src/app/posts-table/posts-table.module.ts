import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PostModule } from 'app/posts-table/post/post.module';
import { PostsTableComponent } from 'app/posts-table/posts-table/posts-table.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PostModule,
    SharedModule,
    InfiniteScrollModule
  ],
  declarations: [PostsTableComponent],
  exports: [PostsTableComponent]
})
export class PostsTableModule { }
