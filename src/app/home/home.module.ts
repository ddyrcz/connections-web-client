import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuModule } from 'app/menu/menu.module';
import { PostsTableModule } from 'app/posts-table/posts-table.module';
import { SharedModule } from 'app/shared/shared.module';
import { HomeRoutingModule } from 'app/home/home-routing.module';
import { UsersModule } from 'app/users/users.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    PostsTableModule,
    SharedModule,
    UsersModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
