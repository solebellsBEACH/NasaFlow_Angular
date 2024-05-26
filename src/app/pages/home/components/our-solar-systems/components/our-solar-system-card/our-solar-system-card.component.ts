import { Component, Input } from '@angular/core';
import { IOurSolarSystemsCard } from '../../../../../../shared/interfaces/components/home/our-solar-systems';

@Component({
  selector: 'app-our-solar-system-card',
  templateUrl: './our-solar-system-card.component.html',
  styleUrl: './our-solar-system-card.component.scss'
})
export class OurSolarSystemCardComponent {
  @Input() cardData!: IOurSolarSystemsCard;
}
