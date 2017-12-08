import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CommentService } from './http/comment.service';
import { PostService } from './http/post.service';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CommentService,
    PostService,
    ServiceAddressProvider
  ],
  exports: [
    HttpModule
  ]
})
export class CoreModule { }
