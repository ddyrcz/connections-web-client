import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'app/posts-table/post/post/post.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PostComponent],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
