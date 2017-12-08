import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModule } from 'app/posts-table/post/post.module';

@NgModule({
  imports: [
    CommonModule,
    PostModule
  ],
  declarations: []
})
export class PostsTableModule { }
