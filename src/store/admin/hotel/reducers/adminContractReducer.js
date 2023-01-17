import {
  HOTELS_INFO_GET_ERROR,
  HOTELS_INFO_GET_SUCCESS,
  HOTELS_INFO_GET_REQUEST,
  HOTELS_DETAILS_GET_REQUEST,
  HOTELS_DETAILS_GET_SUCCESS,
  HOTELS_DETAILS_GET_ERROR,
} from "../action/actionType";

const initStateProperty = {
  loading: false,
  data: [],
  error: "",
};
const initStatePropertyDetails ={
  loading: false,
  data: [],
  error: "",
}
export function hotelsInfoGetReducer(state = initStateProperty, action) {
  switch (action.type) {
    case HOTELS_INFO_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case HOTELS_INFO_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case HOTELS_INFO_GET_ERROR:
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

export function hotelsInfoDetailsGetReducer(state = initStatePropertyDetails, action) {
  switch (action.type) {
    case HOTELS_DETAILS_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case HOTELS_DETAILS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case HOTELS_DETAILS_GET_ERROR:
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