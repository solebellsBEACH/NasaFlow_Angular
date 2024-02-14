import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ImageOfDayComponent } from './components/image-of-day/image-of-day.component';

@NgModule({
  declarations: [
    HomeComponent,
    ImageOfDayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
