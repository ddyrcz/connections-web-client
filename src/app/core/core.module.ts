import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommentService } from './http/comment.service';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { DateService } from 'app/core/date.service';
import { ApplicationDataService } from 'app/core/services/application-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CommentService,
    ServiceAddressProvider,
    DateService,
    ApplicationDataService

  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
