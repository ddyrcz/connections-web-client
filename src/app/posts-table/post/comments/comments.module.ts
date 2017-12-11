import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment/moment.module';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    SharedModule,
    FormsModule
  ],
  declarations: [CommentsListComponent, CommentComponent, AddCommentComponent],
  exports: [CommentsListComponent]
})
export class CommentsModule { }
