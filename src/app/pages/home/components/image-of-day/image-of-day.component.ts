import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../shared/intefaces/store';
import { loadGetImagesOfDay } from '../../../../root-store/app/app.actions';
import { selectImageOfDay, selectImageOfDayState } from '../../../../root-store/app/app.selectors';
import { IImageOfDay } from '../../../../shared/intefaces/store/app';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { IGetImageOfDayResponse } from '../../../../shared/intefaces/http/response';
import { ImageOfDayService } from './image-of-day.service';
import { ApplicationService } from '../../../../services/http/application.service';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrl: './image-of-day.component.scss',
})
export class ImageOfDayComponent implements OnInit, AfterViewInit {

  @ViewChild('learningMoreRef') learningMoreRef?: ElementRef;

  onHover: boolean = false;

  selectImageOfDayState$: Observable<IImageOfDay>
  selectImageOfDay$: Observable<IGetImageOfDayResponse | null>
  contentTextCssExpression$ = new BehaviorSubject({ height: '0px', width: '472px' });
  larguraSubscription: any;

  get previewText(): string {
    let textPreview = '';
    const text = 'Break down silos, standardize processes, and accelerate value delivery. Make the switch from Jira to GitLab! Break down silos, standardize processes, and accelerate value delivery. Make the switch from Jira to GitLab! Make the switch from Jira to GitLab! Break down silos, standardize processes, and accelerate value delivery. Make the switch from Jira to GitLab!'
    return text;
  }

  constructor(
    private _store: Store<IStore>,
    private _imageOfDayService: ImageOfDayService,
    private _applicationService: ApplicationService
  ) {
    this.selectImageOfDayState$ = this._store.select(selectImageOfDayState)
    this.selectImageOfDay$ = this._store.select(selectImageOfDay)
  }
  ngAfterViewInit(): void {
    if (this.learningMoreRef?.nativeElement?.clientHeight) {
      this.contentTextCssExpression$
        .next({ ...this.contentTextCssExpression$.getValue(), height: `${this.learningMoreRef?.nativeElement?.clientHeight}px` })
      this.contentTextCssExpression$.subscribe(console.log)
    }

  }

  ngOnInit(): void {
    // this._store.dispatch(loadGetImagesOfDay({ params: { count: 1 } }))
    // this.larguraSubscription = this._applicationService.windowWidth$.subscribe(console.log)
    console.log(this._imageOfDayService.getWidthByLength(this.previewText.length))
    this.contentTextCssExpression$
      .subscribe(state => {

      })
  }

  toggleHoverState(isHovering: boolean) {
    this.onHover = isHovering;
  }
}
