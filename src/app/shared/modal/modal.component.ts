import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  // providers:[ModalService]
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';
  constructor(public modal: ModalService) {}

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
  ngOnInit(): void {
// document.body.appendChild(this.el.nativeElement)
  }
}
