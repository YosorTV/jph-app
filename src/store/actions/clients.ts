import { Dispatch } from 'redux'
import { api } from '../../api'
import { User } from '../../components/Ui/Table/types'
import { clientsActionType, ClientTypes, ClientPosts, ClientTodos } from '../types'

export const getClients = (limit:number, page:number) => async (dispatch:Dispatch<ClientTypes>) => {
  try {
    dispatch({ type: clientsActionType.GET_CLIENTS })
      const { data } = await api.get(`/users?_limit=${limit}&_page=${page}`);
    dispatch({
      type:clientsActionType.GET_CLIENTS_SUCCESS,
      payload:data
    })
  } catch ({ response }) {
    if(response.status === 404){
    dispatch({
      type:clientsActionType.GET_CLIENTS_ERROR, 
      payload: "Oops something go wrong..." || response.data 
      })
    }
  }
}

export const updateClient = (client:User) => async (dispatch:Dispatch<ClientTypes>) => {
  try {
    const { data } = await api.patch(`/users/${client.id}`, client)
      dispatch({
        type:clientsActionType.UPDATE_CLIENT,
        payload:data
      })
  } catch ({ response }) {
    if(response.status === 404){
      dispatch({
        type:clientsActionType.GET_CLIENTS_ERROR,
        payload: "Oops something go wrong..." || { ...response.data }
      })
    }
  } 
}

export const getClientPosts = (id:string) => async (dispatch:Dispatch<ClientPosts>) => {
  try {
    dispatch({ type: clientsActionType.GET_CLIENT_POSTS })
      const { data } = await api.get(`/posts?userId=${id}`);
    dispatch({
      type:clientsActionType.GET_CLIENT_POSTS_SUCCESS,
      payload:data
    })
  } catch ({ response }) {
    if(response.status === 404){
    dispatch({
      type:clientsActionType.GET_CLIENT_POSTS_ERROR, 
      payload: "Oops something go wrong..." || { ...response.data }
      })
    }
  }
}

export const getClientTodos = (id:string, limit:number, page:number = 1) => async (dispatch:Dispatch<ClientTodos>) => {
  try {
    dispatch({ type: clientsActionType.GET_CLIENT_TODOS })
      const { data } = await api.get(`/todos?userId=${id}&_limit=${limit}&_page=${page}`);
    dispatch({
      type:clientsActionType.GET_CLIENT_TODOS_SUCCESS,
      payload:data
    })
  } catch ({ response }) {
    if(response.status === 404){
    dispatch({
      type:clientsActionType.GET_CLIENT_TODOS_ERROR, 
      payload: "Oops something go wrong..." || { ...response.data }
      })
    }
  }
}