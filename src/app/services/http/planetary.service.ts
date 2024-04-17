import { Injectable } from '@angular/core';
import { ApiHandleService } from './api-handle.service';
import { IGetImageOfDayParams } from '../../shared/interfaces/http/params';
import { GetImageOfDayResponse } from '../../shared/interfaces/http/response';

@Injectable({
  providedIn: 'root'
})
export class PlanetaryService {

  constructor(private _apiHandleService: ApiHandleService) { }

  getImageOfDay(params: IGetImageOfDayParams): GetImageOfDayResponse {
    return this._apiHandleService.Get('planetary/apod', params) as GetImageOfDayResponse
  }
}
