import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login/login.component';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
