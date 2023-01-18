import {
  PRODUCT_GET_ERROR,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_REQUEST,
  PRODUCT_DETAILS_GET_REQUEST,
  PRODUCT_DETAILS_GET_SUCCESS,
  PRODUCT_DETAILS_GET_ERROR,
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
export function productGetReducer(state = initStateProperty, action) {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case PRODUCT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case PRODUCT_GET_ERROR:
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

export function productInfoDetailsGetReducer(state = initStatePropertyDetails, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case PRODUCT_DETAILS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case PRODUCT_DETAILS_GET_ERROR:
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