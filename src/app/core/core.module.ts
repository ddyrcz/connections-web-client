import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CommentService } from './http/comment.service';
import { PostService } from './http/post.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CommentService,
    PostService
  ],
  exports: [
    HttpModule
  ]
})
export class CoreModule { }
