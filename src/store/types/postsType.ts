export enum postsActionType {
  GET_POSTS = "GET_POSTS",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_ERROR = "GET_POSTS_ERROR",
  DELETE_POST = "DELETE_POST",
  EDIT_POST = "EDIT_POST",
  ADD_POST = "ADD_POST",
  SELECTED_POST = "SELECTED_POST",
  RESET_SELECTED_POST = "RESET_SELECTED_POST"
}

export interface IPostsState {
  posts:any[],
  selectedPost:any
  error:null | string,
  isLoading:boolean,
}

interface IGetPosts {
  type:postsActionType.GET_POSTS,
}

interface IGetPostsSuccess {
  type:postsActionType.GET_POSTS_SUCCESS,
  payload:any[]
}

interface IGetPoststError {
  type:postsActionType.GET_POSTS_ERROR,
  payload:string
}

interface IDeletePost {
  type:postsActionType.DELETE_POST,
  payload:string
}

interface IAddPost {
  type:postsActionType.ADD_POST,
  payload:Object
}

interface IEditPost {
  type: postsActionType.EDIT_POST,
  payload:any
}

interface ISelectedPost {
  type: postsActionType.SELECTED_POST,
  payload:any[]
}

interface IResetSelectedPost {
  type: postsActionType.RESET_SELECTED_POST,
}

export type PostType =  IGetPosts |
                        IGetPostsSuccess | 
                        IGetPoststError | 
                        IDeletePost | IAddPost |
                        IEditPost |
                        ISelectedPost | 
                        IResetSelectedPost