import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss'
})
export class TapComponent {
  @Input() tapTitle =''
  @Input() active =false

}
