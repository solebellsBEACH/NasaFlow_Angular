import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../../home-routing.module';
import { ImageOfDayComponent } from './image-of-day.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    ImageOfDayComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [ImageOfDayComponent]
})
export class ImageOfDayModule { }
