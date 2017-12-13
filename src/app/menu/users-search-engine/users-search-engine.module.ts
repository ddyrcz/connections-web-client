import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from 'app/shared/shared.module';
import { UsersSearchEngineComponent } from 'app/menu/users-search-engine/users-search-engine.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  declarations: [UsersSearchEngineComponent],
  exports: [UsersSearchEngineComponent]
})
export class UsersSearchEngineModule { }
