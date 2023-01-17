import { TERMS_AND_CONDITIONS_REQUEST, TERMS_AND_CONDITIONS_SUCCESS, TERMS_AND_CONDITIONS_ERROR } from './actionType'

export function termsAndConditionsGetRequest(data) {
    return {
      type: TERMS_AND_CONDITIONS_REQUEST,
      payload: data,
    };
  }
  export function termsAndConditionsGetSuccess(data) {
    return {
      type: TERMS_AND_CONDITIONS_SUCCESS,
      payload: data,
    };
  }
  export function termsAndConditionsGetError(data) {
    return {
      type: TERMS_AND_CONDITIONS_ERROR,
      payload: data,
    };
  }