import { toastMessage } from '../../../../utils/toast';
import {HOTEL_PROPERTY_POST_REQUEST, HOTEL_PROPERTY_POST_SUCCESS, HOTEL_PROPERTY_POST_ERROR} from './actionType';

export function hotelPropertyPostRequest(data) {
    return {
      type: HOTEL_PROPERTY_POST_REQUEST,
      payload: data,
    };
  }
  export function hotelPropertyPostSuccess(data) {
    toastMessage("Request Processed Successfully!", "success")
    return {
      type: HOTEL_PROPERTY_POST_SUCCESS,
      payload: data,
    };
  }
  export function hotelPropertyPostError(data) {
    toastMessage("Operation Failed. Please, Try again.", "error")
    return {
      type: HOTEL_PROPERTY_POST_ERROR,
      payload: data,
    };
  }