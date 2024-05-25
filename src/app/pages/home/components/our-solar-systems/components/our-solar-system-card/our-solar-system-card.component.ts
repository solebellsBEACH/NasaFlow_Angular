import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-our-solar-system-card',
  templateUrl: './our-solar-system-card.component.html',
  styleUrl: './our-solar-system-card.component.scss'
})
export class OurSolarSystemCardComponent {
  @Input() cardData = { id: 1, name: 'Planets' }
}
