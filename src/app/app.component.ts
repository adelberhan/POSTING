import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './user/auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, AuthComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // constructor(private modalService: ModalService) {}
  private modalService = inject(ModalService);

  ngOnInit(): void {
    console.log(this.modalService.visible);
  }
  title = 'clips';
}
