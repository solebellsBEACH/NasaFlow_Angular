import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContentComponent } from './news-content.component';
import { HomeRoutingModule } from '../../home-routing.module';
import { NewsBlockContentComponent } from './components/news-block-content/news-block-content.component';
import { NewsBlockInformationsComponent } from './components/news-block-informations/news-block-informations.component';
import { SharedModule } from '../../../../shared/shared.module';
import { NewsBlockOverlayComponent } from './components/news-block-overlay/news-block-overlay.component';

@NgModule({
  declarations: [
    NewsContentComponent,
    NewsBlockContentComponent,
    NewsBlockInformationsComponent,
    NewsBlockOverlayComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [NewsContentComponent]
})
export class NewsContentModule { }
