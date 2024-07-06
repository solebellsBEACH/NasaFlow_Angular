import { IDefaultStateProps } from "."
import { IGetImageOfDayResponse } from "../http/http-response.interface"

export interface IImageOfDay extends IDefaultStateProps {
  data: {
    imageOfDayList:
    IGetImageOfDayResponse[] | null

    imageOfDay: IGetImageOfDayResponse | null
  }
}

export interface IAppState {
  imageOfDay: IImageOfDay
}
