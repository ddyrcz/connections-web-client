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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MomentModule,
    MaterialModule,
    HomeModule,
    CoreModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
