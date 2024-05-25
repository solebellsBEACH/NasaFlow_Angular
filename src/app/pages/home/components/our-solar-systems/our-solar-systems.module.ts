import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurSolarSystemsComponent } from './our-solar-systems.component';
import { OurSolarSystemCardComponent } from './components/our-solar-system-card/our-solar-system-card.component';

@NgModule({
  declarations: [
    OurSolarSystemsComponent,
    OurSolarSystemCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OurSolarSystemsComponent
  ]
})
export class OurSolarSystemsModule { }
