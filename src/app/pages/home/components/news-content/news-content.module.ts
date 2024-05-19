import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContentComponent } from './news-content.component';
import { HomeRoutingModule } from '../../home-routing.module';
import { NewsBlockContentComponent } from './components/news-block-content/news-block-content.component';
import { NewsBlockInformationsComponent } from './components/news-block-informations/news-block-informations.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    NewsContentComponent,
    NewsBlockContentComponent,
    NewsBlockInformationsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [NewsContentComponent]
})
export class NewsContentModule { }
