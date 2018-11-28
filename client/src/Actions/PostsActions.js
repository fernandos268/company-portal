import { ADD_POST, TOGGLE_POST_FORM } from "../Constants/ActionTypes";

export const addPost = post => ({ type: ADD_POST, payload: post });

export const togglePostForm = () => ({ type: TOGGLE_POST_FORM });
