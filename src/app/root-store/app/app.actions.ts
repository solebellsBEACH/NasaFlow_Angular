import { createAction, props } from '@ngrx/store';
import { IGetImageOfDayResponse } from '../../shared/intefaces/http/response';
import { IGetImageOfDayParams } from '../../shared/intefaces/http/params';

export const loadGetImagesOfDay = createAction('GET_IMAGE_OF_DAY_REQUEST', props<{ params: IGetImageOfDayParams }>());
export const loadGetImagesOfDaySuccess = createAction(
  'GET_IMAGE_OF_DAY_SUCCESS',
  props<{ imageOfDayList: IGetImageOfDayResponse[] }>(),
);
export const loadGetImagesOfDayFailure = createAction('GET_IMAGE_OF_DAY_FAIL');
