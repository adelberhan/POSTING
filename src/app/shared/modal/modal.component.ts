import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  // providers:[ModalService]
})
export class ModalComponent implements OnInit,OnDestroy {
  @Input() modalID = '';
  constructor(public modal: ModalService, public el: ElementRef,  @Inject(PLATFORM_ID) private platformId: Object
) {}

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
  ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    document.body.appendChild(this.el.nativeElement);
  }
}

ngOnDestroy(): void {
  if (isPlatformBrowser(this.platformId)) {
    if (document.body.contains(this.el.nativeElement)) {
      document.body.removeChild(this.el.nativeElement);
    }
  }
}

}
