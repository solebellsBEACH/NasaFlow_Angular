import { Component } from '@angular/core';
import { GitHubLinks } from '../../../../shared/constants/links';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss'
})
export class NewsContentComponent {
  moreNasaNewsLink: string = "https://urlTest.com"
}
