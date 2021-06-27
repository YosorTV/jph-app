import { themeActionType, IThemeState, IThemeTypeAction } from '../types/index';

const initialState:IThemeState = {
  theme: "dark"
}

export const themeReducer = (state = initialState, action:IThemeTypeAction):IThemeState => {
  const { type, payload } = action;
  
  switch(type){
    case themeActionType.CHANGE_THEME:{
      return {
        ...state,
        theme:payload
      }
    }
    default:
      return state;
  }
}