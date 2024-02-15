import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "../../shared/intefaces/store/app";

export const selectAppStateFeature = createFeatureSelector<IAppState>('app');

export const selectImageOfDayState = createSelector(
    selectAppStateFeature,
    (state:IAppState) => state.imageOfDay
);
