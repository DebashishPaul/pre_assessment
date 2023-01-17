import { CONTRACT_POST_REQUEST, CONTRACT_POST_SUCCESS, CONTRACT_POST_ERROR } from "../action/actionType"

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function contractReducer(state = initState, action) {
  switch (action.type) {
    case CONTRACT_POST_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CONTRACT_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CONTRACT_POST_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
