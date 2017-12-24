import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'app/posts-table/post/post/post.component';
import { SharedModule } from 'app/shared/shared.module';
import { MomentModule } from 'angular2-moment/moment.module';
import { CommentsModule } from 'app/posts-table/post/comments/comments.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MomentModule,
    CommentsModule,
    RouterModule.forChild([])
  ],
  declarations: [PostComponent],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
