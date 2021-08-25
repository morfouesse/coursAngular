import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  loginForm = new FormGroup({
    usernameControl: new FormControl('', [Validators.required]),
    passwordControl: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), this.validatePassword])
  });

  constructor() { }

  ngOnInit() {
  }

  validatePassword(control: AbstractControl) {
    if (control.value.includes('erwan')) {
      return { validPassword: true };
    }
    return null;
  }

  get usernameControl() { return this.loginForm.get('usernameControl'); }

  get passwordControl() { return this.loginForm.get('passwordControl'); }

  handleSubmitForm() {
    console.log(this.loginForm.value);
  }

}
