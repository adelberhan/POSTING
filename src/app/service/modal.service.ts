import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  visible = false;
  constructor() {}
  isOpenModal() {
    return this.visible;
  }
  ToggleModal(){
    this.visible=!this.visible;
    console.log( this.visible)
  }
}
