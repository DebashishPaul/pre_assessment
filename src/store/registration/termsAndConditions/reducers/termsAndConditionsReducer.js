import { TERMS_AND_CONDITIONS_REQUEST, TERMS_AND_CONDITIONS_SUCCESS, TERMS_AND_CONDITIONS_ERROR } from '../actions/actionType'

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function termsAndConditionsReducer(state = initState, action) {
  switch (action.type) {
    case TERMS_AND_CONDITIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case TERMS_AND_CONDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case TERMS_AND_CONDITIONS_ERROR:
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
