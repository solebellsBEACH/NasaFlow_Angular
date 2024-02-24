import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../shared/intefaces/store';
import { loadGetImagesOfDay } from '../../../../root-store/app/app.actions';
import { selectImageOfDay, selectImageOfDayState } from '../../../../root-store/app/app.selectors';
import { IImageOfDay } from '../../../../shared/intefaces/store/app';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { IGetImageOfDayResponse } from '../../../../shared/intefaces/http/response';
import { ImageOfDayService } from './image-of-day.service';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrl: './image-of-day.component.scss',
})
export class ImageOfDayComponent implements OnInit, AfterViewInit {

  @ViewChild('learningMoreRef') learningMoreRef?: ElementRef;

  selectImageOfDayState$: Observable<IImageOfDay>
  selectImageOfDay$: Observable<IGetImageOfDayResponse | null>
  contentTextWidth$ = new BehaviorSubject<string>("auto");

  windowWidth: number = window.innerWidth;

  get previewText(): string {
    let textPreview = '';
    this.selectImageOfDay$.subscribe(data => {
      textPreview = data?.explanation || 'deu ruim'
    });
    // return textPreview;
    const text = 'Break down silos, standardize processes, and accelerate value delivery. Make the switch from Jira to GitLab! Break down silos, standardize processes, and accelerate value delivery. Make the switch from Jira to GitLab! Make the switch from Jira to GitLab! Break down silos, standardize processes, and accelerate value delivery. Make the switch from Jira to GitLab!'
    return this._imageOfDayService.getFormattedPreviewText(text)
  }

  constructor(
    private _store: Store<IStore>,
    private _imageOfDayService: ImageOfDayService,
    private _cdRef: ChangeDetectorRef
  ) {
    this.selectImageOfDayState$ = this._store.select(selectImageOfDayState)
    this.selectImageOfDay$ = this._store.select(selectImageOfDay)
  }

  ngOnInit(): void {
    // this._store.dispatch(loadGetImagesOfDay({ params: { count: 1 } }))
  }

  ngAfterViewInit(): void {
    this.contentTextWidth$
      .next(this._imageOfDayService.getContentTextWidth(this.previewText))
    this._cdRef.detectChanges();
  }
}
