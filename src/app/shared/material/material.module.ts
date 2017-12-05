import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatInputModule } from '@angular/material'

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule
  ]
})
export class MaterialModule { }
