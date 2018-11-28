import { ADD_POST, ADD_USER, TOGGLE_POST_FORM } from "../Constants/ActionTypes";

export const addPost = post => ({ type: ADD_POST, payload: post });

export const togglePostForm = () => ({ type: TOGGLE_POST_FORM });

export const addUser = user => ({ type: ADD_USER, payload: user });
