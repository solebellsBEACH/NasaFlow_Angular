import { PlanetaryService } from './../../services/http/planetary.service';
// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAppActions from './app.actions';
import { IGetImageOfDayResponse } from '../../shared/intefaces/http/response';

@Injectable()
export class AppEffects {
  loadGetImageOfDay$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAppActions.loadGetImageOfDay),
      switchMap((props) =>
        this.planetaryService.getImageOfDay(props.params).pipe(
          map((imageOfDayList: IGetImageOfDayResponse[]) => {
            return fromAppActions.loadGetImageOfDaySuccess({ imageOfDayList });
          }),
          catchError((error) => of(fromAppActions.loadGetImageOfDayFailure())),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private planetaryService: PlanetaryService,
  ) { }
}
