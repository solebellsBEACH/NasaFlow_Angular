import { IDefaultStateProps } from "."
import { IGetImageOfDayResponse } from "../http/response"

export interface IImageOfDay extends IDefaultStateProps {
  data:{
    imageOfDayList:
    IGetImageOfDayResponse[] | null

    imageOfDay: IGetImageOfDayResponse | null
  }
}

export interface IAppState {
 imageOfDay: IImageOfDay
}
