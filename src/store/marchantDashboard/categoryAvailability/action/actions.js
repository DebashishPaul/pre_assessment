import { toastMessage } from "../../../../utils/toast";
import {
  // CATEGORY_AVAILABILITY_GET_REQUEST,
  // CATEGORY_AVAILABILITY_GET_SUCCESS,
  // CATEGORY_AVAILABILITY_GET_ERROR,
  CATEGORY_AVAILABILITY_POST_REQUEST,
  CATEGORY_AVAILABILITY_POST_SUCCESS,
  CATEGORY_AVAILABILITY_POST_ERROR
} from "./actionType";


// // CATEGORY AVAILABILITY Get action
// export function categoryGetAvailabilityRequest(data) {
//   return {
//     type: CATEGORY_AVAILABILITY_GET_REQUEST,
//     payload: data,
//   };
// }

// export function categoryGetAvailabilitySuccess(data) {
//   return {
//     type: CATEGORY_AVAILABILITY_GET_SUCCESS,
//     payload: data,
//   };
// }
// export function categoryGetAvailabilityError(data) {
//   return {
//     type: CATEGORY_AVAILABILITY_GET_ERROR,
//     payload: data,
//   };
// }

// CATEGORY AVAILABILITY Post action
export function categoryPostAvailabilityRequest(data) {
  return {
    type: CATEGORY_AVAILABILITY_POST_REQUEST,
    payload: data,
  };
}

export function categoryPostAvailabilitySuccess(data) {
  toastMessage("Request Processed Successfully!", "success")
  return {
    type: CATEGORY_AVAILABILITY_POST_SUCCESS,
    payload: data,
  };
}
export function categoryPostAvailabilityError(data) {
  toastMessage("Operation Failed. Please, Try again.", "error")
  return {
    type: CATEGORY_AVAILABILITY_POST_ERROR,
    payload: data,
  };
}