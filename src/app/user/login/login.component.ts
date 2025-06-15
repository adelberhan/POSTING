import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule, NgModel } from '@angular/forms';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  showAlert: boolean = false;
  alertColor: string = 'blue';
  alertMsg: string = '';
  isSubmitted = false
  cardinal = {
    email: '',
    password: '',
  };
  constructor(private auth: AngularFireAuth) {}



  async login() {
    try {
      await this.auth.signInWithEmailAndPassword(
        this.cardinal.email,
        this.cardinal.password
      );
      this.successLoginAlert();
    } catch (e) {
      this.showAlert = true;
      this.alertColor = 'red';
      this.alertMsg = `Error`;
    }
    // Here you would typically handle the login logic, e.g., call an authentication service
  }

  successLoginAlert() {
    this.showAlert = true;
    this.alertColor = 'green';
    this.alertMsg = 'Logged in successfully';
    this.isSubmitted = true
  }
  failedLogInAlert() {
    this.showAlert = false;
    this.alertColor = 'red';
    this.alertMsg = 'Error!!!!!!!!!!!!!!!!!!!!!!!11';
    this.isSubmitted = true

  }
}
