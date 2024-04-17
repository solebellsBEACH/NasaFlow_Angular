import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContentComponent } from './news-content.component';
import { HomeRoutingModule } from '../../home-routing.module';
import { NewsBlockContentComponent } from './components/news-block-content/news-block-content.component';

@NgModule({
  declarations: [
    NewsContentComponent,
    NewsBlockContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [NewsContentComponent]
})
export class NewsContentModule { }
