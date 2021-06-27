// Core
import { combineReducers } from 'redux';

// Reducers
import {
  themeReducer as Theme,
  sideBarReducer as SideBar,
  clientReducer as Clients,
  clientPostsById as ClientPosts,
  clientTodosById as ClientTodos,
  postsReducer as Posts,
} from '../reducers';

export const rootReducer = combineReducers({ SideBar, Theme, Clients, ClientPosts, ClientTodos, Posts});
