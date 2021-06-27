import { sideBarActionType, ISideBarState, ISideBarAction } from '../types/index'

const initialState:ISideBarState = {
  isOpened:false
}

export const sideBarReducer = (state = initialState, action:ISideBarAction):ISideBarState => {
  const { type, payload } = action;

  switch(type) {
    case sideBarActionType.SIDEBAR_IN_ACTION:{
      return {
        ...state,
        isOpened:payload
      }
    }
    default:
      return state
  }
}