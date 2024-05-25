import { ourSolarSystemsCard } from './../../../../shared/constants/ourSolarSystems';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-solar-systems',
  templateUrl: './our-solar-systems.component.html',
  styleUrl: './our-solar-systems.component.scss'
})
export class OurSolarSystemsComponent {
  ourSolarSystemsCardList = ourSolarSystemsCard
}
