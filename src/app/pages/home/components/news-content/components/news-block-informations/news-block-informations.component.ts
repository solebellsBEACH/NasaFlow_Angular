import { Component, Input } from '@angular/core';
import { ApplicationService } from '../../../../../../services/application/application.service';
import { ResolutionBreakpoints } from '../../../../../../shared/constants/resolutionBreakpoints';
import { Observable } from 'rxjs';
import { INewsBlockInformationData } from '../../interfaces/NewsBlockInformation.interface';

@Component({
  selector: 'app-news-block-informations',
  templateUrl: './news-block-informations.component.html',
  styleUrl: './news-block-informations.component.scss'
})
export class NewsBlockInformationsComponent {
  @Input() hasReadTime: boolean = true;
  @Input() maxTitleLength: number = 60;
  isMobile$: Observable<boolean>;

  @Input() data: INewsBlockInformationData = {
    readTime: 3,
    title: 'NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space StationNASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space StationNASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space StationNASA Expedition 71 Astronauts to Conduct Research aboard Space Station NASA Expedition 71 Astronauts to Conduct Research aboard Space Station',
    image: 'https://science.nasa.gov/wp-content/uploads/2023/12/main_image-83.jpg?w=4096&format=jpeg'
  }

  constructor(private readonly _applicationService: ApplicationService) {
    this.isMobile$ = this._applicationService.compareResolutionThan(ResolutionBreakpoints.MD)
  }

}
