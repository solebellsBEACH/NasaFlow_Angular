import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../shared/intefaces/store';
import { loadGetImagesOfDay } from '../../../../root-store/app/app.actions';
import { selectImageOfDay, selectImageOfDayState } from '../../../../root-store/app/app.selectors';
import { IImageOfDay } from '../../../../shared/intefaces/store/app';
import { Observable } from 'rxjs';
import { IGetImageOfDayResponse } from '../../../../shared/intefaces/http/response';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrl: './image-of-day.component.scss'
})
export class ImageOfDayComponent implements OnInit {

  selectImageOfDayState$: Observable<IImageOfDay>
  selectImageOfDay$: Observable<IGetImageOfDayResponse | null>

  constructor(private store: Store<IStore>) {
    this.selectImageOfDayState$ = this.store.select(selectImageOfDayState)
    this.selectImageOfDay$ = this.store.select(selectImageOfDay)
  }

  ngOnInit(): void {
    this.store.dispatch(loadGetImagesOfDay({ params: { count: 1 } }))
  }
}
