import { IAppState } from "./app"

export interface IDefaultStateProps {
  error: boolean,
  loading: boolean
}

export interface IStore{
  app: IAppState
}
