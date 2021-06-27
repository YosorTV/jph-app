export enum todosActionType {
  GET_TODOS = "GET_TODOS",
  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
  GET_TODOS_ERROR = "GET_TODOS_ERROR",
  DELETE_TODO = "DELETE_TODO",
  EDIT_TODO = "EDIT_TODO",
  ADD_TODO = "ADD_TODO"
}

export interface ITodosState {
  todos:any[],
  isLoading:boolean,
  error: null | string
}

interface IGetTodos {
  type:todosActionType.GET_TODOS
}

interface IGetTodosSuccess {
  type:todosActionType.GET_TODOS_SUCCESS,
  payload:any[]
}

interface IGetTodosError {
  type:todosActionType.GET_TODOS_ERROR,
  payload:string
}

interface IDeleteTodo {
  type:todosActionType.DELETE_TODO,
  payload:string
}

interface IAddTodo {
  type:todosActionType.ADD_TODO,
  payload:any
}

interface IEditTodo {
  type: todosActionType.EDIT_TODO,
  payload:any
}

export type TodoType = IGetTodos | IGetTodosSuccess | IGetTodosError | IDeleteTodo | IAddTodo | IEditTodo