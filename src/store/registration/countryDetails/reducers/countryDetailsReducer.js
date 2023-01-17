import { COUNTRY_DETAIL_GET_REQUEST, COUNTRY_DETAIL_GET_SUCCESS, COUNTRY_DETAIL_GET_ERROR } from "../action/actionType"

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function countryDetailsReducer(state = initState, action) {
  switch (action.type) {
    case COUNTRY_DETAIL_GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case COUNTRY_DETAIL_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case COUNTRY_DETAIL_GET_ERROR:
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
