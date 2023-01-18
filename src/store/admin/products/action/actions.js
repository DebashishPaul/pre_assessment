import {
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_ERROR,
  PRODUCT_DETAILS_GET_REQUEST,
  PRODUCT_DETAILS_GET_SUCCESS,
  PRODUCT_DETAILS_GET_ERROR,
} from "./actionType";


// product INFO
export function productGetRequest(data) {
  return {
    type: PRODUCT_GET_REQUEST,
    payload: data,
  };
}

export function productGetSuccess(data) {
  return {
    type: PRODUCT_GET_SUCCESS,
    payload: data,
  };
}
export function productGetError(data) {
  return {
    type: PRODUCT_GET_ERROR,
    payload: data,
  };
}

// product DETAILS
export function productGetDetailsRequest(data) {
  return {
    type: PRODUCT_DETAILS_GET_REQUEST,
    payload: data,
  };
}

export function productGetDetailsSuccess(data) {
  return {
    type: PRODUCT_DETAILS_GET_SUCCESS,
    payload: data,
  };
}
export function productGetDetailsError(data) {
  return {
    type: PRODUCT_DETAILS_GET_ERROR,
    payload: data,
  };
}