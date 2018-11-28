import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer";

const rootReducer = combineReducers({ UsersReducer, PostsReducer });

export default rootReducer;
