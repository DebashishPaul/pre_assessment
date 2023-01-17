import {
  HOTELS_INFO_GET_REQUEST,
  HOTELS_INFO_GET_SUCCESS,
  HOTELS_INFO_GET_ERROR,
  HOTELS_DETAILS_GET_REQUEST,
  HOTELS_DETAILS_GET_SUCCESS,
  HOTELS_DETAILS_GET_ERROR,
} from "./actionType";


// HOTELS INFO
export function hotelsGetRequest(data) {
  return {
    type: HOTELS_INFO_GET_REQUEST,
    payload: data,
  };
}

export function hotelsGetSuccess(data) {
  return {
    type: HOTELS_INFO_GET_SUCCESS,
    payload: data,
  };
}
export function hotelsGetError(data) {
  return {
    type: HOTELS_INFO_GET_ERROR,
    payload: data,
  };
}

// HOTELS DETAILS
export function hotelsGetDetailsRequest(data) {
  return {
    type: HOTELS_DETAILS_GET_REQUEST,
    payload: data,
  };
}

export function hotelsGetDetailsSuccess(data) {
  return {
    type: HOTELS_DETAILS_GET_SUCCESS,
    payload: data,
  };
}
export function hotelsGetDetailsError(data) {
  return {
    type: HOTELS_DETAILS_GET_ERROR,
    payload: data,
  };
}