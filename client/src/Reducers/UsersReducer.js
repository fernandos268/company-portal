import { ADD_USER } from "../Constants/ActionTypes";

const initialState = {
  users: []
};
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default UsersReducer;
