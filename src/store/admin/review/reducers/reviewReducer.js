// import {
//   OWNER_REVIEW_SUBMISSION_REQUEST,
//   OWNER_REVIEW_SUBMISSION_SUCCESS,
//   OWNER_REVIEW_SUBMISSION_ERROR,
//   CONTRACT_REVIEW_SUBMISSION_REQUEST,
//   CONTRACT_REVIEW_SUBMISSION_SUCCESS,
//   CONTRACT_REVIEW_SUBMISSION_ERROR,
//   DOCUMENT_REVIEW_SUBMISSION_REQUEST,
//   DOCUMENT_REVIEW_SUBMISSION_SUCCESS,
//   HOTEL_REVIEW_SUBMISSION_REQUEST,
//   HOTEL_REVIEW_SUBMISSION_ERROR,
//   CATEGORY_REVIEW_SUBMISSION_SUCCESS,

import {
  SUBMIT_REVIEW_ERROR,
  SUBMIT_REVIEW_REQUEST,
  SUBMIT_REVIEW_SUCCESS,
} from "../actions/actionType";

// } from "../action/actionType";
const initState = {
  loading: false,
  data: [],
  error: "",
};

export function submitReviewReducer(state = initState, action) {
  switch (action.type) {
    case SUBMIT_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case SUBMIT_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case SUBMIT_REVIEW_ERROR:
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
// export function ownerReviewReducer(state = initState, action) {
//   switch (action.type) {
//     case OWNER_REVIEW_SUBMISSION_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         // data:[],
//         error: "",
//       };
//     case OWNER_REVIEW_SUBMISSION_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     case OWNER_REVIEW_SUBMISSION_ERROR:
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

// export function contractReviewReducer(state = initState, action) {
//   switch (action.type) {
//     case CONTRACT_REVIEW_SUBMISSION_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         // data:[],
//         error: "",
//       };
//     case CONTRACT_REVIEW_SUBMISSION_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     case CONTRACT_REVIEW_SUBMISSION_ERROR:
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

// export function documentsReviewReducer(state = initState, action) {
//   switch (action.type) {
//     case DOCUMENT_REVIEW_SUBMISSION_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         // data:[],
//         error: "",
//       };
//     case DOCUMENT_REVIEW_SUBMISSION_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     case DOCUMENT_REVIEW_SUBMISSION_ERROR:
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

// export function hotelReviewReducer(state = initState, action) {
//   switch (action.type) {
//     case HOTEL_REVIEW_SUBMISSION_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         // data:[],
//         error: "",
//       };
//     case HOTEL_REVIEW_SUBMISSION_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     case HOTEL_REVIEW_SUBMISSION_ERROR:
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

// export function categoryReviewReducer(state = initState, action) {
//   switch (action.type) {
//     case CATEGORY_REVIEW_SUBMISSION_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         // data:[],
//         error: "",
//       };
//     case CATEGORY_REVIEW_SUBMISSION_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     case CATEGORY_REVIEW_SUBMISSION_ERROR:
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
