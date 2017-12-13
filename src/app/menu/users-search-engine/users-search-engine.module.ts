import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from 'app/shared/shared.module';
import { UsersSearchEngineComponent } from 'app/menu/users-search-engine/users-search-engine.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  declarations: [UsersSearchEngineComponent],
  exports: [UsersSearchEngineComponent]
})
export class UsersSearchEngineModule { }
