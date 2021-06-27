export enum sideBarActionType {
  SIDEBAR_IN_ACTION = "SIDEBAR_IN_ACTION",
}

export interface ISideBarState {
  isOpened:Boolean
}

export interface ISideBarAction {
  type: sideBarActionType.SIDEBAR_IN_ACTION,
  payload: Boolean
}
