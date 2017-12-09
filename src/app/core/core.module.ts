import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommentService } from './http/comment.service';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { DateService } from 'app/core/date.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CommentService,
    ServiceAddressProvider,
    DateService
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
