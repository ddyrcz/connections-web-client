import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostService } from './shared/service/post.service';
import { CommentService } from './shared/service/comment.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

import { MomentModule } from 'angular2-moment';
import { LoginComponent } from './login/login.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostComponent } from './post/post/post.component';
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'app/shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreatePostComponent,
    CommentComponent,
    AddCommentComponent,
    LoginComponent,
    PostDetailComponent,
    PostComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpModule,
    MomentModule,
    MaterialModule
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
