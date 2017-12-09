import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment/moment.module';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    SharedModule
  ],
  declarations: [CommentsListComponent, CommentComponent],
  exports: [CommentsListComponent]
})
export class CommentsModule { }
