import { IDefaultStateProps } from "../../interfaces/store";
import { IAppState, IImageOfDay } from "../../interfaces/store/app.interface";

const DefaultInitialProps: IDefaultStateProps = {
  error: false,
  loading: false
}

export const ImageOfDayInitialValue: IImageOfDay = {
  ...DefaultInitialProps,
  data: {
    imageOfDayList: null,
    imageOfDay: null
  }
}


export const AppStateInitialValue: IAppState = {
  imageOfDay: ImageOfDayInitialValue
}
