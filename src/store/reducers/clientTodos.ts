import { ClientTodos, IClientTodosState, clientsActionType } from '../types/clientsType';

const initialState:IClientTodosState = {
  todos:[],
  error:null,
  isLoading:false
}

export const clientTodosById = (state = initialState, action:ClientTodos):IClientTodosState => {
  switch(action.type){
    case clientsActionType.GET_CLIENT_TODOS: {
      return {
        ...state, 
        error:null,
        isLoading:true
      }
    }
    case clientsActionType.GET_CLIENT_TODOS_SUCCESS: {
      return {
        ...state, 
        isLoading:false,
        todos:action.payload
      }
    }
    case clientsActionType.GET_CLIENT_TODOS_ERROR: {
      return {
        ...state,
        isLoading:false,
        todos:[],
        error:action.payload
      }
    }
    default: 
      return {...state}
  }
}