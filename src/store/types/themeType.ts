export enum themeActionType {
  CHANGE_THEME = "CHANGE_THEME",
}

export interface IThemeState {
  theme:string;
}

export interface IThemeTypeAction {
  type: themeActionType.CHANGE_THEME,
  payload: string
}
