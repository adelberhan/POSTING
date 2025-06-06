import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];
  visible = false;
  constructor() {}

  /**
   * Registers a new modal with a unique ID.
   * This function adds a new object to the `modals` array,
   * associating the provided `id` with an initial `visible` state of `false`.
   * @param id A unique string identifier for the modal.
   */
  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  /**
   * Checks if a modal with the given ID is currently open (visible).
   * This function searches the `modals` array for an element with the matching `id`
   * and returns `true` if such an element exists and its `visible` property is `true`.
   * Otherwise, it returns `false`. The `!!` operator is used to coerce the result
   * of the `find` operation (which could be an object or `undefined`) to a boolean.
   * @param id The string identifier of the modal to check.
   * @returns `true` if the modal is open, `false` otherwise.
   */
  isOpenModal(id: string) {
    return !!this.modals.find(element => element.id === id)?.visible
  }

  /**
   * Toggles the visibility of a modal with the given ID.
   * This function finds the modal in the `modals` array based on its `id`.
   * If the modal is found, its `visible` property is inverted (from `true` to `false`
   * or from `false` to `true`).
   * @param id The string identifier of the modal to toggle.
   */
  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id)

    if(modal) {
      modal.visible = !modal.visible
    }
    // this.visible = !this.visible
  }
}
