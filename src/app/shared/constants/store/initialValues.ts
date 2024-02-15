import { IDefaultStateProps } from "../../intefaces/store";
import { IAppState, IImageOfDay } from "../../intefaces/store/app";

const DefaultInitialProps: IDefaultStateProps = {
  error: false,
  loading: false
}

export const ImageOfDayInitialValue: IImageOfDay = {
  ...DefaultInitialProps,
  data:{
    imageOfDayList: null,
    imageOfDay: null
  }
}


export const AppStateInitialValue: IAppState = {
 imageOfDay:ImageOfDayInitialValue
}
