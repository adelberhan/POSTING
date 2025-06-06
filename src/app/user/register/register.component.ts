import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  showAlert: boolean = false;
  alertColor: string = 'blue';
  alertMsg: string = '';
  passMsg!: string;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  ]);
  confirm_password = new FormControl('', Validators.required);
  phone_number = new FormControl('', [
    Validators.required,
    Validators.min(11),
    Validators.max(11),
  ]);
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phone_number: this.phone_number,
  });

  register() {
    this.alertMsg = 'Please wait! your account is being created...';
    this.showAlert = true;
    this.alertColor = 'blue';
  }

  get validPassword() {
    if (this.password.value !== this.confirm_password.value) {
      return (this.passMsg = 'Passwords do not match');
    }
    return
  }
}
