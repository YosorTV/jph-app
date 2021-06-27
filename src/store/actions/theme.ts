import { themeActionType, IThemeTypeAction } from '../types/index'

export const themeTypeAction = Object.freeze({
  setTheme:(themeType:string):IThemeTypeAction => {
    return {
      type:themeActionType.CHANGE_THEME,
      payload:themeType
    }
  },
})