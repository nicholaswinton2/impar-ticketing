import { Component } from '@angular/core';
import { PopoverController } from "ionic-angular";
import { PopoverMenu } from "../../popover-menu/popover-menu";
/**
 * Created by francesco on 16/10/2016.
 */

@Component({
  selector: 'popover',
  template:
    `
      <button ion-button clear
              (click)="presentPopover($event)">
        <ion-icon name="more" class="larger-icon"></ion-icon>
      </button>
    `,
  styles: ["ion-icon {color: #424242}"]
})
export class PopoverComponent {

  /**
   * @constructor
   * @param {PopoverController} popoverCtrl
   */
  constructor(private popoverCtrl: PopoverController) { }

  /**
   * Create and present popover menu
   */
  presentPopover(event) {
    this.popoverCtrl.create(PopoverMenu).present({ev: event});
  }
}
