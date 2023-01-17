import { HOTEL_PROPERTY_POST_REQUEST, HOTEL_PROPERTY_POST_SUCCESS, HOTEL_PROPERTY_POST_ERROR } from "../action/actionType"

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function hotelPropertyReducer(state = initState, action) {
  switch (action.type) {
    case HOTEL_PROPERTY_POST_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case HOTEL_PROPERTY_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case HOTEL_PROPERTY_POST_ERROR:
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
