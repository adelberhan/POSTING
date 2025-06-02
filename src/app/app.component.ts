import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './user/auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { ModalService } from './service/modal.service';
import AOS from 'aos';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, AuthComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    // AOS.init({
    //  duration:1200
    // })

  }
  title = 'clips';
}
