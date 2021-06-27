import {postsActionType, PostType, IPostsState} from '../types'
import { Post } from '../../models'

const initialState:IPostsState = {
  posts:[],
  selectedPost: new Post('', '', null, null),
  isLoading:false,
  error:null
}

export const postsReducer = (state = initialState, action:PostType):IPostsState => {
  switch(action.type){
    case postsActionType.GET_POSTS: {
      return {
        ...state,
        isLoading:true
      }
    }
    case postsActionType.GET_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading:false,
        posts:action.payload
      }
    }
    case postsActionType.GET_POSTS_ERROR: {
      return {
        ...state,
        isLoading:false,
        error:action.payload
      }
    }
    case postsActionType.ADD_POST: {
      return {
        ...state,
        isLoading:false,
        posts:[action.payload, ...state.posts]
      }
    }
    case postsActionType.DELETE_POST: {
      return {
        ...state,
        isLoading:false,
        posts:state.posts.filter((item) => item.id !== action.payload)
      }
    }
    case postsActionType.EDIT_POST: {
      return {
        ...state,
        isLoading:false,
        posts:state.posts.map((item) => item.id !== action.payload.id ? item : action.payload)
      }
    }
    case postsActionType.SELECTED_POST: {
      return {
        ...state,
        isLoading:false,
        selectedPost:{...action.payload}
      }
    }
    default:
      return {...state}
  }
}