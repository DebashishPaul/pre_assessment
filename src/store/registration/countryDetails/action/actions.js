import {COUNTRY_DETAIL_GET_REQUEST, COUNTRY_DETAIL_GET_SUCCESS, COUNTRY_DETAIL_GET_ERROR} from './actionType';

export function countryGetRequest(data) {
    return {
      type: COUNTRY_DETAIL_GET_REQUEST,
      payload: data,
    };
  }
  export function countryGetSuccess(data) {
    return {
      type: COUNTRY_DETAIL_GET_SUCCESS,
      payload: data,
    };
  }
  export function countryGetError(data) {
    return {
      type: COUNTRY_DETAIL_GET_ERROR,
      payload: data,
    };
  }