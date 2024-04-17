import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ImageOfDayComponent } from './components/image-of-day/image-of-day.component';
import { ImageOfDayService } from './components/image-of-day/image-of-day.service';
import { LoadingPageComponent } from '../../components/loading-page/loading-page.component';
import { NewsContentModule } from './components/news-content/news-content.module';

@NgModule({
  declarations: [
    HomeComponent,
    ImageOfDayComponent,
    LoadingPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NewsContentModule
  ],
  providers: [
    ImageOfDayService,
  ]
})
export class HomeModule { }
