import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuModule } from 'app/menu/menu.module';
import { PostsTableModule } from 'app/posts-table/posts-table.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    PostsTableModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
