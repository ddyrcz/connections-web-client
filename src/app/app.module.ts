import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostComponent,
    CreatePostComponent,
    TableComponent,
    PolymerElement('paper-card')
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
