import { ClientPosts, IClientPostsState, clientsActionType } from '../types/clientsType';

const initialState:IClientPostsState = {
  posts:[],
  isLoading:false,
  error:null
}

export const clientPostsById = (state = initialState, action:ClientPosts):IClientPostsState => {
  switch(action.type){
    case clientsActionType.GET_CLIENT_POSTS: {
      return {
        ...state,
        error:null,
        isLoading:true,
      }
    }
    case clientsActionType.GET_CLIENT_POSTS_SUCCESS: {
      return {
        ...state,
        posts:action.payload,
        isLoading:false,
      }
    }
    case clientsActionType.GET_CLIENT_POSTS_ERROR: {
      return {
        ...state,
        isLoading:false,
        error:action.payload,
      }
    }
    default:
      return {...state}
  }
}