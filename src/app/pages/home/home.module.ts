import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ImageOfDayService } from './components/image-of-day/image-of-day.service';
import { LoadingPageComponent } from '../../components/loading-page/loading-page.component';
import { NewsContentModule } from './components/news-content/news-content.module';
import { ImageOfDayModule } from './components/image-of-day/image-of-day.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoadingPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ImageOfDayModule,
    NewsContentModule,
    SharedModule
  ],
  providers: [
    ImageOfDayService,
  ]
})
export class HomeModule { }
