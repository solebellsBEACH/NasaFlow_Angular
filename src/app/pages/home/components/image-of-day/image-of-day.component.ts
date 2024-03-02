import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../shared/intefaces/store';
import { loadGetImagesOfDay } from '../../../../root-store/app/app.actions';
import { selectImageOfDay, selectImageOfDayState } from '../../../../root-store/app/app.selectors';
import { IImageOfDay } from '../../../../shared/intefaces/store/app';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { IGetImageOfDayResponse } from '../../../../shared/intefaces/http/response';
import { ImageOfDayService } from './image-of-day.service';
import { ApplicationService } from '../../../../services/http/application.service';
import { ResolutionBreakpoints } from '../../../../shared/constants/resolutionBreakpoints';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrl: './image-of-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageOfDayComponent implements OnInit, AfterViewInit {

  @ViewChild('learningMoreRef') learningMoreRef?: ElementRef;

  onHover: boolean = false;

  isMobile$: Observable<boolean>
  selectImageOfDayState$: Observable<IImageOfDay>
  selectImageOfDay$: Observable<IGetImageOfDayResponse | null>
  contentTextCssExpression$ = new BehaviorSubject({ height: '0px', width: '0px' });


  constructor(
    private _store: Store<IStore>,
    private _imageOfDayService: ImageOfDayService,
    private _applicationService: ApplicationService
  ) {
    this.selectImageOfDayState$ = this._store.select(selectImageOfDayState)
    this.selectImageOfDay$ = this._store.select(selectImageOfDay)
    this.isMobile$ = this._applicationService.compareResolutionThan(ResolutionBreakpoints.SM)
  }

  ngAfterViewInit(): void {
    if (this.learningMoreRef?.nativeElement?.clientHeight) {
      this.contentTextCssExpression$
        .next({ ...this.contentTextCssExpression$.getValue(), height: `${this.learningMoreRef?.nativeElement?.clientHeight}px` })
    }
  }

  ngOnInit(): void {
    this._getImagesOfDay(1)
    this._getContentTextCssExpression()
  }

  toggleHoverState(isHovering: boolean) {
    this.onHover = isHovering;
  }

  getTextFormatted(text?: string) {
    let formmated = ''
    this._applicationService.windowWidth$.subscribe(windowWidth => {
      formmated = this._imageOfDayService.getFormattedPreviewText(text || '', windowWidth)
    })
    return formmated
  }

  private _getImagesOfDay(count: number) {
    this._store.dispatch(loadGetImagesOfDay({ params: { count } }))
  }

  private _getContentTextCssExpression() {
    this._applicationService.windowWidth$.pipe(
      switchMap(widthResult => {
        const reponsiveIdealWidth = this._imageOfDayService.getIdealWidth(widthResult);
        const widthByLength = this._imageOfDayService.getWidthByLength(this.previewText.length);
        const contentWidth = !!widthByLength && widthByLength > reponsiveIdealWidth ? widthByLength : reponsiveIdealWidth;
        return of(contentWidth);
      })
    ).subscribe(contentWidth => {
      this.contentTextCssExpression$.next({ ...this.contentTextCssExpression$.getValue(), width: `${contentWidth}px` });
    });
  }

  get previewText(): string {
    let textPreview = '';

    this.selectImageOfDay$.subscribe(state => {
      textPreview = this.getTextFormatted(state?.explanation)
    })
    return textPreview
  }
}
