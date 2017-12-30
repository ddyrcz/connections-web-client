import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommentService } from './http/comment.service';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { DateService } from 'app/core/date.service';
import { ApplicationDataService } from 'app/core/services/application-data.service';
import { UserService } from './http/user.service';
import { FileService } from './http/file.service';
import { PostService } from './http/post.service';
import { AuthService } from './http/auth.service';
import { TokenStorage } from './services/token-storage.service';
import { GrowlService } from 'app/core/growl/growl.service';
import { FailureResponseMessageResolver } from 'app/core/http/failure-response-message-resolver';
import { HttpErrorInterceptor } from 'app/core/http/interceptor/http-error-interceptor.service';
import { HeaderInterceptor } from 'app/core/http/interceptor/header-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CommentService,
    ServiceAddressProvider,
    DateService,
    ApplicationDataService,
    UserService,
    FileService,
    PostService,
    AuthService,
    TokenStorage,
    GrowlService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,

    },
    FailureResponseMessageResolver
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
