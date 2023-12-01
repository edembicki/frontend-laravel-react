const SET_FEED_TEXT_IS_LIMITED = 'SET_FEED_TEXT_IS_LIMITED'
const SET_FEED_TEXT = 'SET_FEED_TEXT'
const SET_FEED_MODAL_SHOW = 'SET_FEED_MODAL_SHOW'
const SET_FEED_FORM_AUTHOR = 'SET_FEED_FORM_AUTHOR'
const SET_FEED_FORM_TYPE = 'SET_FEED_FORM_TYPE'
const SET_FEED_FORM_TEXT = 'SET_FEED_FORM_TEXT'
const SET_CURRENT_FEED_DATA = 'SET_CURRENT_FEED_DATA'

export const setFeedTextIsLimited = (payload: any) => ({
  type: SET_FEED_TEXT_IS_LIMITED,
  payload
})

export const setFeedText = (payload: any) => ({
  type: SET_FEED_TEXT,
  payload
})

export const setFeedModalShow = (payload: any) => ({
  type: SET_FEED_MODAL_SHOW,
  payload
})

export const setFeedFormAuthor = (payload: any) => ({
  type: SET_FEED_FORM_AUTHOR,
  payload
})

export const setFeedFormType = (payload: any) => ({
  type: SET_FEED_FORM_TYPE,
  payload
})

export const setFeedFormText = (payload: any) => ({
  type: SET_FEED_FORM_TEXT,
  payload
})

export const setCurrentFeedData = (payload: any) => ({
  type: SET_CURRENT_FEED_DATA,
  payload
})


export const initialState = {
  textIsLimited: false,
  textFeed: '',
  modalShow: false,
  feedFormAuthor: '',
  feedFormType: '',
  feedFormText: '',
  currentFeedData: []
}

const FeedsReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_FEED_TEXT_IS_LIMITED:
      return { ...state, textIsLimited: action.payload }
    case SET_FEED_TEXT:
      return { ...state, textFeed: action.payload }
    case SET_FEED_MODAL_SHOW:
      return { ...state, modalShow: action.payload }
    case SET_FEED_FORM_AUTHOR:
      return { ...state, feedFormAuthor: action.payload }
    case SET_FEED_FORM_TYPE:
      return { ...state, feedFormType: action.payload }
    case SET_FEED_FORM_TEXT:
      return { ...state, feedFormText: action.payload }
    case SET_CURRENT_FEED_DATA:
      return { ...state, currentFeedData: action.payload }
    default:
      return state
  }
}

export default FeedsReducer
