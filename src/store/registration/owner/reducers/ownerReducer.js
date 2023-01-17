import { OWNER_PUT_REQUEST, OWNER_PUT_SUCCESS, OWNER_PUT_ERROR } from '../actions/actionType'

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function ownerReducer(state = initState, action) {
  switch (action.type) {
    case OWNER_PUT_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case OWNER_PUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case OWNER_PUT_ERROR:
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
