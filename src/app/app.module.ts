import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostService } from './shared/service/post.service';
import { CommentService } from './shared/service/comment.service';
import { MaterialModule } from '@angular/material'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { TableComponent } from './table/table.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

import { MomentModule } from 'angular2-moment';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostComponent,
    CreatePostComponent,
    TableComponent,
    CommentComponent,
    AddCommentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    MaterialModule.forRoot()
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
