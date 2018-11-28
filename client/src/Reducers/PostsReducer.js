import {
  ADD_POST,
  UPDATE_POST,
  ARCHIVE_POST,
  TOGGLE_POST_FORM
} from "../Constants/ActionTypes";

const initialState = {
  posts: [],
  isFormVisible: false
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case TOGGLE_POST_FORM:
      return { ...state, isFormVisible: !state.isFormVisible };
    default:
      return state;
  }
};

export default PostsReducer;
