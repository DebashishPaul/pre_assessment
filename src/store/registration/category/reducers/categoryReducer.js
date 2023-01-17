import { CATEGORY_POST_REQUEST, CATEGORY_POST_SUCCESS, CATEGORY_POST_ERROR, GET_ALL_CATEGORY_MERCHANT_REQUEST, GET_ALL_CATEGORY_MERCHANT_ERROR, GET_ALL_CATEGORY_MERCHANT_SUCCESS } from '../actions/actionType'

const initState = {
  loading: false,
  data: [],
  error: "",
};

const initStateAllCategories = {
  loading: false,
  data: [],
  error: "",
};

export function categoryReducer(state = initState, action) {
  switch (action.type) {
    case CATEGORY_POST_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CATEGORY_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CATEGORY_POST_ERROR:
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


export function allCategoriesMerchantReducer(state = initStateAllCategories, action) {
  switch (action.type) {
    case GET_ALL_CATEGORY_MERCHANT_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case GET_ALL_CATEGORY_MERCHANT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_ALL_CATEGORY_MERCHANT_ERROR:
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
