import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ImageOfDayComponent } from './components/image-of-day/image-of-day.component';
import { ImageOfDayService } from './components/image-of-day/image-of-day.service';

@NgModule({
  declarations: [
    HomeComponent,
    ImageOfDayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ],
  providers: [
    ImageOfDayService,
  ]
})
export class HomeModule { }
