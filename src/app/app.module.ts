import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'angular2-moment';

import { MaterialModule } from 'app/shared/material/material.module';
import { AppComponent } from './app.component';
import { HomeModule } from 'app/home/home.module';
import { CoreModule } from 'app/core/core.module';
import { LoginModule } from 'app/login/login.module';
import { Router } from '@angular/router';

import { GrowlModule } from 'primeng/components/growl/growl';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MomentModule,
    MaterialModule,
    CoreModule,
    LoginModule,
    RouterModule.forRoot([]),
    HomeModule,
    GrowlModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log(router.config);
  }
}
