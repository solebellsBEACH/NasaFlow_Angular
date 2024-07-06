import { IAppState } from "./app.interface"

export interface IDefaultStateProps {
  error: boolean,
  loading: boolean
}

export interface IStore {
  app: IAppState
}
