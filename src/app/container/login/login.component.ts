import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isSubmit: boolean = false;
  constructor() { }

  logform: any = new FormGroup({
    email: new FormControl(''),
    pwd: new FormControl(''),
  });

  get con() {
    return this.logform.controls;
  }
  login() {
    console.log(this.logform.value);
    if (this.logform.email != "" && this.logform.pwd != "") {

    }
  }
  }
