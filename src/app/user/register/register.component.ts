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
import { AuthService } from '../../service/auth.service';
import { IUser } from '../../model/user.model';

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
  isSubmitted: boolean = false;

  constructor(private auth: AuthService) {}

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl<number | null>(null, [
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

  get validPassword() {
    if (this.password.value !== this.confirm_password.value) {
      return (this.passMsg = 'Passwords do not match');
    }
    return;
  }
  async register() {
    this.alertMsg = 'Please wait! your account is being created...';
    this.showAlert = true;
    this.alertColor = 'blue';

    // const { email, password } = this.registerForm.value;
    try {
      this.auth.createUser(this.registerForm.value as IUser);
      await this.registerForm.reset();
    } catch (e) {
      console.error(e);
      this.alertMsg = 'Error creating account. Please try again.';
      this.alertColor = 'red';
      this.isSubmitted = false;
      return;
    }
    this.alertColor = 'green';
    this.alertMsg = 'Account created successfully!';
    this.isSubmitted = true;
  }
}
