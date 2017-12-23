import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PostModule } from 'app/posts-table/post/post.module';
import { PostsTableComponent } from 'app/posts-table/posts-table/posts-table.component';
import { SharedModule } from 'app/shared/shared.module';
import { CreatePostComponent } from './create-post/create-post.component';

import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  imports: [
    CommonModule,
    PostModule,
    SharedModule,
    InfiniteScrollModule,
    MatDialogModule
  ],
  declarations: [PostsTableComponent, CreatePostComponent],
  exports: [PostsTableComponent],
  entryComponents: [CreatePostComponent]
})
export class PostsTableModule { }
