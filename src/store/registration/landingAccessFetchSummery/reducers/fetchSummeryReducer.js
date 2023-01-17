import { FETCH_SUMMERY_REQUEST, FETCH_SUMMERY_SUCCESS, FETCH_SUMMERY_ERROR } from '../actions/actionType'

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function fetchSummeryReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_SUMMERY_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case FETCH_SUMMERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_SUMMERY_ERROR:
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
