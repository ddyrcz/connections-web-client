import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
