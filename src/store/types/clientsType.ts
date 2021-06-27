export enum clientsActionType {
  
  GET_CLIENTS = "GET_CLIENTS",
  GET_CLIENTS_SUCCESS = "GET_CLIENTS_SUCCESS",
  GET_CLIENTS_ERROR = "GET_USERS_ERROR",

  UPDATE_CLIENT = "UPDATE_CLIENT",

  GET_CLIENT_TODOS = "GET_CLIENT_TODOS",
  GET_CLIENT_TODOS_SUCCESS = "GET_CLIENT_TODOS_SUCCESS",
  GET_CLIENT_TODOS_ERROR = "GET_CLIENT_TODOS_ERROR",
  
  GET_CLIENT_POSTS = "GET_CLIENT_POSTS",
  GET_CLIENT_POSTS_SUCCESS = "GET_CLIENT_POSTS_SUCCESS",
  GET_CLIENT_POSTS_ERROR = "GET_CLIENT_POSTS_ERROR",
}

export interface IClientState {
  users:any[],
  error:null | string,
  isLoading:boolean,
}

export interface IClientPostsState {
  posts:any[],
  error:null | string,
  isLoading:boolean,
}

export interface IClientTodosState {
  todos:any[],
  error:null | string,
  isLoading:boolean,
}

type Data = {
  payload:[]
}

interface IEditClient {
  type: clientsActionType.UPDATE_CLIENT,
  payload:any
}

interface IGetClient {
  type:clientsActionType.GET_CLIENTS,
}

interface IGetClientSuccess {
  type:clientsActionType.GET_CLIENTS_SUCCESS,
  payload:Array<Data>
}

interface IGetClientError {
  type:clientsActionType.GET_CLIENTS_ERROR,
  payload:string
}

interface IGetClienPosts {
  type:clientsActionType.GET_CLIENT_POSTS,
}

interface IGetClientPostsSuccess {
  type:clientsActionType.GET_CLIENT_POSTS_SUCCESS,
  payload:Array<Data>
}

interface IGetClientPostsError {
  type:clientsActionType.GET_CLIENT_POSTS_ERROR,
  payload:string
}

interface IGetClientTodos {
  type:clientsActionType.GET_CLIENT_TODOS,
}

interface IGetClientTodosSuccess {
  type:clientsActionType.GET_CLIENT_TODOS_SUCCESS,
  payload:Array<Data>
}

interface IGetClientTodosError {
  type:clientsActionType.GET_CLIENT_TODOS_ERROR,
  payload:string
}


export type ClientTypes = IGetClient | IGetClientSuccess | IGetClientError | IEditClient
export type ClientPosts = IGetClienPosts | IGetClientPostsSuccess | IGetClientPostsError 
export type ClientTodos = IGetClientTodos | IGetClientTodosSuccess | IGetClientTodosError