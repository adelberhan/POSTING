import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { AuthService } from '../service/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  openModal($event: Event) {
    $event.preventDefault();

    this.modal.toggleModal('auth');
  }

  async logout(event: Event) {
    event.preventDefault();
    await this.afAuth.signOut();
  }
}
