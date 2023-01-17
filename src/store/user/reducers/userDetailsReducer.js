import { GET_USER_DETAILS } from "../actions/actionType";

export default function userDetailsReducer(state = { data: " " }, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}