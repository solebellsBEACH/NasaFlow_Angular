// app.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { IAppState } from '../../shared/intefaces/store/app';
import { AppStateInitialValue } from '../../shared/constants/store/initialValues';

export const initialState: IAppState = AppStateInitialValue;

export const appReducer = createReducer(
  initialState,
  on(appActions.loadGetImageOfDay, (state) => ({
    ...state,
    imageOfDay: {
      ...state.imageOfDay,
      loading: true,
      error: false,
    },
  })),
  on(appActions.loadGetImageOfDaySuccess, (state, { imageOfDayList }) => ({
    ...state,
    imageOfDay: {
      ...state.imageOfDay,
      data:{
        imageOfDayList,
        imageOfDay:imageOfDayList[0]
      },
      loading: false,
      error: false,
    },

  })),
  on(appActions.loadGetImageOfDayFailure, (state) => ({
    ...state,
    imageOfDay: {
      ...state.imageOfDay,
      loading: false,
      error: true,
    },
  })),
);
