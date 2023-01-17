import {
  CONTRACT_INFO_GET_REQUEST,
  CONTRACT_INFO_GET_SUCCESS,
  CONTRACT_INFO_GET_ERROR,
} from "./actionType";

// CONTRACT INFO
export function contractGetRequest(data) {
  return {
    type: CONTRACT_INFO_GET_REQUEST,
    payload: data,
  };
}

export function contractGetSuccess(data) {
  return {
    type: CONTRACT_INFO_GET_SUCCESS,
    payload: data,
  };
}

export function contractGetError(data) {
  return {
    type: CONTRACT_INFO_GET_ERROR,
    payload: data,
  };
}
