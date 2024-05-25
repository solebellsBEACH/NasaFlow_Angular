import { Component, Input } from '@angular/core';
import { ApplicationService } from '../../../../../../services/application/application.service';
import { ResolutionBreakpoints } from '../../../../../../shared/constants/resolutionBreakpoints';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-block-overlay',
  templateUrl: './news-block-overlay.component.html',
  styleUrl: './news-block-overlay.component.scss'
})
export class NewsBlockOverlayComponent {
  @Input() text: string = ''
  @Input() maxTitle: number = 60;

  isMobile$: Observable<boolean>;

  onFocus: boolean = false;

  constructor(private readonly _applicationService: ApplicationService) {
    this.isMobile$ = this._applicationService.compareResolutionThan(ResolutionBreakpoints.MD)
  }

  setOnFocus(value: boolean) {
    this.onFocus = value
  }

}
