import { sideBarActionType } from '../types/index'

export const sideBarAction = Object.freeze({
  setSideBarStatus:(params:boolean) => {
    return {
      type: sideBarActionType.SIDEBAR_IN_ACTION,
      payload: params
    }
  },
})