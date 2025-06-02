import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ModalService } from '../../service/modal.service';
import { TapContainerComponent } from '../../shared/tap-container/tap-container.component';
import { TapComponent } from '../../shared/tap/tap.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ModalComponent, TapContainerComponent, TapComponent,RegisterComponent,LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  constructor(private modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('auth');
    this.modal.register('Test');
  }
}
