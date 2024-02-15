import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../shared/intefaces/store';
import { loadGetImageOfDay } from '../../../../root-store/app/app.actions';
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

  url = "https://apod.nasa.gov/apod/image/9801/sataurora_hst.jpg"

  selectImageOfDayState$: Observable<IImageOfDay>
  selectImageOfDay$: Observable<IGetImageOfDayResponse|null>

  constructor(private store: Store<IStore>){
    this.selectImageOfDayState$ = this.store.select(selectImageOfDayState)
    this.selectImageOfDay$ = this.store.select(selectImageOfDay)
  }

  ngOnInit(): void {
    this.store.dispatch(loadGetImageOfDay({params:{count:10}}))
  }
}
