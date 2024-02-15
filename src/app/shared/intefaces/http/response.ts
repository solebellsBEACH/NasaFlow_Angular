import { Observable } from "rxjs";

export interface IGetImageOfDayResponse {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export type GetImageOfDayResponse = Observable<IGetImageOfDayResponse[]>
