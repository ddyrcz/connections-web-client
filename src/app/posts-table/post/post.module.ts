import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'app/posts-table/post/post/post.component';
import { SharedModule } from 'app/shared/shared.module';
import { MomentModule } from 'angular2-moment/moment.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MomentModule
  ],
  declarations: [PostComponent],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
