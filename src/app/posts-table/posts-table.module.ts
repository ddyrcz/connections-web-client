import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModule } from 'app/posts-table/post/post.module';
import { PostsTableComponent } from 'app/posts-table/posts-table/posts-table.component';

@NgModule({
  imports: [
    CommonModule,
    PostModule
  ],
  declarations: [PostsTableComponent],
  exports: [PostsTableComponent]
})
export class PostsTableModule { }
