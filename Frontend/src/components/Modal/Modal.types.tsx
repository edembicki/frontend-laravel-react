import { Dispatch } from "react"

export interface Props {
  currentFeedData: any
  onHide: () => void
  onSuccess: () => void
  reducer: Reducer
}
export interface Reducer {
  feedFormText: string
  setFeedFormAuthor: (payload: any) => void
  setFeedFormType: (payload: any) => void
  setFeedFormText: (payload: any) => void
  dispatch: Dispatch<any>
}