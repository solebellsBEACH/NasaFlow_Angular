import { createAction, props } from '@ngrx/store';
import { IGetImageOfDayResponse } from '../../shared/intefaces/http/response';
import { IGetImageOfDayParams } from '../../shared/intefaces/http/params';

export const loadGetImageOfDay = createAction('GET_IMAGE_OF_DAY_REQUEST', props<{ params:IGetImageOfDayParams }>());
export const loadGetImageOfDaySuccess = createAction(
  'GET_IMAGE_OF_DAY_SUCCESS',
  props<{ imageOfDayList: IGetImageOfDayResponse[] }>(),
);
export const loadGetImageOfDayFailure = createAction('GET_IMAGE_OF_DAY_FAIL');
