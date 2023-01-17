import {
  // CATEGORY_AVAILABILITY_GET_REQUEST,
  // CATEGORY_AVAILABILITY_GET_SUCCESS,
  // CATEGORY_AVAILABILITY_GET_ERROR,
  CATEGORY_AVAILABILITY_POST_REQUEST,
  CATEGORY_AVAILABILITY_POST_SUCCESS,
  CATEGORY_AVAILABILITY_POST_ERROR
} from "../action/actionType";

// const initStatecategoryGetAvailability = {
//   loading: false,
//   data: [],
//   error: "",
// };
const initStatecategoryPostAvailability ={
  loading: false,
  data: [],
  error: "",
}
// export function categoryGetAvailabilityReducer(state = initStatecategoryGetAvailability, action) {
//   switch (action.type) {
//     case CATEGORY_AVAILABILITY_GET_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         // data:[],
//         error: "",
//       };
//     case CATEGORY_AVAILABILITY_GET_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     case CATEGORY_AVAILABILITY_GET_ERROR:
//       return {
//         ...state,
//         loading: false,
//         data: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// }

export function categoryPostAvailabilityReducer(state = initStatecategoryPostAvailability, action) {
  switch (action.type) {
    case CATEGORY_AVAILABILITY_POST_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CATEGORY_AVAILABILITY_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CATEGORY_AVAILABILITY_POST_ERROR:
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