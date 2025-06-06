import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  cardinal = {
    email: '',
    password: '',
  };

  login(){
    console.log('Login attempt with:', this.cardinal);
    // Here you would typically handle the login logic, e.g., call an authentication service
  }
}
