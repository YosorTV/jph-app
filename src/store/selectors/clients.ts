import { IClientState, IClientPostsState, IClientTodosState } from "../types/index";

export const clients = (state:any):IClientState => {
  return state.Clients
}

export const clientPosts = (state:any):IClientPostsState => {
  return state.ClientPosts
}

export const clientTodos = (state:any):IClientTodosState => {
  return state.ClientTodos
}