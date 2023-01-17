import {
  CONTRACT_REVIEW_SUBMISSION_ERROR,
  CONTRACT_REVIEW_SUBMISSION_REQUEST,
  CONTRACT_REVIEW_SUBMISSION_SUCCESS,
  OWNER_REVIEW_SUBMISSION_ERROR,
  OWNER_REVIEW_SUBMISSION_REQUEST,
  OWNER_REVIEW_SUBMISSION_SUCCESS,
  DOCUMENT_REVIEW_SUBMISSION_REQUEST,
  DOCUMENT_REVIEW_SUBMISSION_SUCCESS,
  DOCUMENT_REVIEW_SUBMISSION_ERROR,
  HOTEL_REVIEW_SUBMISSION_REQUEST,
  HOTEL_REVIEW_SUBMISSION_SUCCESS,
  HOTEL_REVIEW_SUBMISSION_ERROR,
  CATEGORY_REVIEW_SUBMISSION_REQUEST,
  CATEGORY_REVIEW_SUBMISSION_SUCCESS,
  CATEGORY_REVIEW_SUBMISSION_ERROR,
} from "./actionType";
// OWNER INFO
export function ownerGetRequest(data) {
  return {
    type: OWNER_REVIEW_SUBMISSION_REQUEST,
    payload: data,
  };
}

export function ownerGetSuccess(data) {
  return {
    type: OWNER_REVIEW_SUBMISSION_SUCCESS,
    payload: data,
  };
}
export function ownerGetError(data) {
  return {
    type: OWNER_REVIEW_SUBMISSION_ERROR,
    payload: data,
  };
}

// CONTRACT INFO
export function contractGetRequest(data) {
  return {
    type: CONTRACT_REVIEW_SUBMISSION_REQUEST,
    payload: data,
  };
}

export function contractGetSuccess(data) {
  return {
    type: CONTRACT_REVIEW_SUBMISSION_SUCCESS,
    payload: data,
  };
}
export function contractGetError(data) {
  return {
    type: CONTRACT_REVIEW_SUBMISSION_ERROR,
    payload: data,
  };
}

// DOCUMENTS INFO
export function documentsGetRequest(data) {
  return {
    type: DOCUMENT_REVIEW_SUBMISSION_REQUEST,
    payload: data,
  };
}

export function documentsGetSuccess(data) {
  return {
    type: DOCUMENT_REVIEW_SUBMISSION_SUCCESS,
    payload: data,
  };
}
export function documentsGetError(data) {
  return {
    type: DOCUMENT_REVIEW_SUBMISSION_ERROR,
    payload: data,
  };
}

// HOTELS INFO
export function hotelsGetRequest(data) {
  return {
    type: HOTEL_REVIEW_SUBMISSION_REQUEST,
    payload: data,
  };
}

export function hotelsGetSuccess(data) {
  return {
    type: HOTEL_REVIEW_SUBMISSION_SUCCESS,
    payload: data,
  };
}
export function hotelsGetError(data) {
  return {
    type: HOTEL_REVIEW_SUBMISSION_ERROR,
    payload: data,
  };
}

// CATEGORIES INFO
export function categoryGetRequest(data) {
  return {
    type: CATEGORY_REVIEW_SUBMISSION_REQUEST,
    payload: data,
  };
}

export function categoryGetSuccess(data) {
  return {
    type: CATEGORY_REVIEW_SUBMISSION_SUCCESS,
    payload: data,
  };
}
export function categoryGetError(data) {
  return {
    type: CATEGORY_REVIEW_SUBMISSION_ERROR,
    payload: data,
  };
}
