import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  NgxMaskDirective,
  provideNgxMask,
} from 'ngx-mask';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-input',
  standalone: true,
imports: [ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() mask: string = '';

}
