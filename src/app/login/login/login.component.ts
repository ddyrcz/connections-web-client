import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() { }

  formGroup: FormGroup;

  private createForm() {
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ''
    })
  }

  login() {
    return false
  }

}
