import {
  ADMIN_CONTRACT_REQUEST,
  ADMIN_CONTRACT_SUCCESS,
  ADMIN_CONTRACT_ERROR,
  OWNER_INFO_GET_REQUEST,
  OWNER_INFO_GET_SUCCESS,
  OWNER_INFO_GET_ERROR,
  CONTRACT_INFO_GET_REQUEST,
  CONTRACT_INFO_GET_SUCCESS,
  CONTRACT_INFO_GET_ERROR,
  DOCUMENTS_INFO_GET_REQUEST,
  DOCUMENTS_INFO_GET_SUCCESS,
  DOCUMENTS_INFO_GET_ERROR,
  HOTELS_INFO_GET_REQUEST,
  HOTELS_INFO_GET_SUCCESS,
  HOTELS_INFO_GET_ERROR,
  CATEGORIES_INFO_GET_ERROR,
  CATEGORIES_INFO_GET_SUCCESS,
  CATEGORIES_INFO_GET_REQUEST,
  CATEGORIES_DETAILS_GET_REQUEST,
  CATEGORIES_DETAILS_GET_SUCCESS,
  CATEGORIES_DETAILS_GET_ERROR,
} from "./actionType";

export function adminContractGetRequest(data) {
  return {
    type: ADMIN_CONTRACT_REQUEST,
    payload: data,
  };
}

export function adminContractGetSuccess(data) {
  return {
    type: ADMIN_CONTRACT_SUCCESS,
    payload: data,
  };
}
export function adminContractGetError(data) {
  return {
    type: ADMIN_CONTRACT_ERROR,
    payload: data,
  };
}

// OWNER INFO
export function ownerGetRequest(data) {
  return {
    type: OWNER_INFO_GET_REQUEST,
    payload: data,
  };
}

export function ownerGetSuccess(data) {
  return {
    type: OWNER_INFO_GET_SUCCESS,
    payload: data,
  };
}

export function ownerGetError(data) {
  return {
    type: OWNER_INFO_GET_ERROR,
    payload: data,
  };
}


// DOCUMENTS INFO
export function documentsGetRequest(data) {
  return {
    type: DOCUMENTS_INFO_GET_REQUEST,
    payload: data,
  };
}

export function documentsGetSuccess(data) {
  return {
    type: DOCUMENTS_INFO_GET_SUCCESS,
    payload: data,
  };
}

export function documentsGetError(data) {
  return {
    type: DOCUMENTS_INFO_GET_ERROR,
    payload: data,
  };
}


// CATEGORIES INFO
export function categoriesGetRequest(data) {
  return {
    type: CATEGORIES_INFO_GET_REQUEST,
    payload: data,
  };
}

export function categoriesGetSuccess(data) {
  return {
    type: CATEGORIES_INFO_GET_SUCCESS,
    payload: data,
  };
}
export function categoriesGetError(data) {
  return {
    type: CATEGORIES_INFO_GET_ERROR,
    payload: data,
  };
}

// CATEGORIES DETAILS
export function categoriesDetailsGetRequest(data) {
  return {
    type: CATEGORIES_DETAILS_GET_REQUEST,
    payload: data,
  };
}

export function categoriesDetailsGetSuccess(data) {
  return {
    type: CATEGORIES_DETAILS_GET_SUCCESS,
    payload: data,
  };
}
export function categoriesDetailsGetError(data) {
  return {
    type: CATEGORIES_DETAILS_GET_ERROR,
    payload: data,
  };
}
