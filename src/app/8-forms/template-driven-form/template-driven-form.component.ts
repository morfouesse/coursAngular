import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/shared/models/login-form.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  loginFormValue = new LoginForm();

  constructor() {
    this.loginFormValue.username = 'Erwan';
    this.loginFormValue.password = 'qsdz';
  }

  ngOnInit() {
  }

  handleSubmitForm(formValue: LoginForm) {
    console.log('handleSubmitForm', formValue);
  }

}
