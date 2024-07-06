import { ImageDividerDataList } from './../../shared/constants/imageDivider';
import { Component } from '@angular/core';
import { selectImageOfDayLoading } from '../../root-store/app/app.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '../../shared/interfaces/store';
import { loadGetImagesOfDay } from '../../root-store/app/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  imageDividerList = ImageDividerDataList

  selectImageOfDayLoading$: Observable<boolean>;

  constructor(
    private _store: Store<IStore>,
  ) {
    this.selectImageOfDayLoading$ = this._store.select(selectImageOfDayLoading)
  }

  ngOnInit(): void {
    this._getImagesOfDay(1)
  }

  private _getImagesOfDay(count: number) {
    this._store.dispatch(loadGetImagesOfDay({ params: { count } }))
  }
}
