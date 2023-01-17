import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../actions/actionType'

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function signUpReducer(state = initState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case SIGN_UP_ERROR:
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
