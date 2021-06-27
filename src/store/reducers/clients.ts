import { IClientState, clientsActionType, ClientTypes } from '../types/index'

const initialState:IClientState = {
  users:[],
  error: null,
  isLoading:false,
}

export const clientReducer = (state = initialState, action:ClientTypes):IClientState => {
  switch(action.type){
    case clientsActionType.GET_CLIENTS: {
      return {
        ...state,
        isLoading:true,
      }
    }
    case clientsActionType.GET_CLIENTS_SUCCESS: {
      return {
        ...state,
        users:action.payload,
        isLoading:false,
      }
    }
    case clientsActionType.GET_CLIENTS_ERROR: {
      return { 
        ...state,
        error:action.payload,
        isLoading:false,
      }
    }
    case clientsActionType.UPDATE_CLIENT: {
      return {
        ...state,
        isLoading:false,
        users:state.users.map((item) => item.id !== action.payload.id ? item : action.payload)
      }
    }
    default:
      return state;
  }
}
