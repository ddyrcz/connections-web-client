import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'app/menu/menu/menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersSearchEngineComponent } from './users-search-engine/users-search-engine.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([]),
    ReactiveFormsModule
  ],
  declarations: [
    MenuComponent,
    UsersSearchEngineComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
