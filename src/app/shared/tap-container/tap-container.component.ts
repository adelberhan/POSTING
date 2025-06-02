import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TapComponent } from '../tap/tap.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-tap-container',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './tap-container.component.html',
  styleUrl: './tap-container.component.scss',
})
export class TapContainerComponent implements AfterContentInit {
  @ContentChildren(TapComponent) taps?: QueryList<TapComponent>;
  ngAfterContentInit(): void {
    const activeTaps = this.taps?.filter((tap) => tap.active);
    if (activeTaps?.length === 0 || !activeTaps) {
      this.selectTap(this.taps!.first);
    }
  }
  selectTap(tap: TapComponent) {
    this.taps?.forEach((tap) => (tap.active = false));
    tap.active = true;
    return false;
  }
}
