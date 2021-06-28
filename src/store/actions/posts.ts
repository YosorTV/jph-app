import { Dispatch } from 'react';
import { api } from '../../api';
import { postsActionType, PostType } from '../types';

export const getPosts = (currentPage:number) => async (dispatch:Dispatch<PostType>) => {
  try {
    dispatch({ type: postsActionType.GET_POSTS })
    const { data } = await api.get(`posts?_limit=8&_page=${currentPage}`)
    dispatch({
      type:postsActionType.GET_POSTS_SUCCESS,
      payload:data
    })
  } catch ({response}) {
    if(response.status === 404){
      dispatch({
        type:postsActionType.GET_POSTS_ERROR, 
        payload: { ...response.data } || "Oops something go wrong..." 
        })
      }
  }
}

export const addPost = (newPost:Object) => async (dispatch:Dispatch<PostType>) => {
  try {
    await api.post('posts', newPost);
    dispatch({
      type:postsActionType.ADD_POST,
      payload:newPost
    })
  } catch ({ response }) {
    if(response.status === 404){
      dispatch({
        type:postsActionType.GET_POSTS_ERROR, 
        payload: { ...response.data } || "Oops something go wrong..." 
        })
      }
  }
}

export const deletePost = (postId:string) => async (dispatch:Dispatch<PostType>) => {
  try{
    await api.delete(`/posts/${postId}`);
    dispatch({ 
      type:postsActionType.DELETE_POST,
      payload:postId
    })
  } catch ({ response }) {
    if(response.status === 404){
      dispatch({
        type:postsActionType.GET_POSTS_ERROR, 
        payload: { ...response.data } || "Oops something go wrong..." 
        })
      }
  } 
}

export const editPost = (post:any) => async (dispatch:Dispatch<PostType>) => {
  try {
    const { data } = await api.patch(`/posts/${post.id}`, post)
      dispatch({
        type:postsActionType.EDIT_POST,
        payload:data
      })
  } catch ({ response }) {
    if(response.status === 404){
      dispatch({
        type:postsActionType.GET_POSTS_ERROR,
        payload: "Oops something go wrong..." || { ...response.data }
      })
    }
  } 
}

export const selectedPostAction = Object.freeze({
  setPost:(post:any):PostType => {
    return {
      type:postsActionType.SELECTED_POST,
      payload:post
    }
  },
})
