import {
  CONTRACT_INFO_GET_REQUEST,
  CONTRACT_INFO_GET_SUCCESS,
  CONTRACT_INFO_GET_ERROR,
} from "../action/actionType";


const initStateContract = {
  loading: false,
  data: [],
  error: "",
};

export function contractInfoGetReducer(state = initStateContract, action) {
  switch (action.type) {
    case CONTRACT_INFO_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CONTRACT_INFO_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CONTRACT_INFO_GET_ERROR:
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
