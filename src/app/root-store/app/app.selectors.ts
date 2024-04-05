import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "../../shared/interfaces/store/app";

export const selectAppStateFeature = createFeatureSelector<IAppState>('app');

export const selectImageOfDayState = createSelector(
  selectAppStateFeature,
  (state: IAppState) => state.imageOfDay
);

export const selectImageOfDay = createSelector(
  selectAppStateFeature,
  (state: IAppState) => state.imageOfDay.data.imageOfDay
);



