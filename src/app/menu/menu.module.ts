import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'app/menu/menu/menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersSearchEngineModule } from 'app/menu/users-search-engine/users-search-engine.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([]),
    UsersSearchEngineModule
  ],
  declarations: [
    MenuComponent,
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
