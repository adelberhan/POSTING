import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './user/auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { ModalService } from './service/modal.service';
import AOS from 'aos';
import { CommonModule, DOCUMENT, NgIf } from '@angular/common';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavComponent, AuthComponent, SharedModule,NgIf,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService, public auth:AuthService) {}

  ngOnInit(): void {
    // AOS.init({
    //  duration:1200
    // })

  }
  title = 'clips';
}
