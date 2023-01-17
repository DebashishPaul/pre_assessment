import { toastMessage } from '../../../../utils/toast';
import {CONTRACT_POST_REQUEST, CONTRACT_POST_SUCCESS, CONTRACT_POST_ERROR} from './actionType';

export function contractPostRequest(data) {
    return {
      type: CONTRACT_POST_REQUEST,
      payload: data,
    };
  }
  
  export function contractPostSuccess(data) {
    toastMessage("Request Processed Successfully!", "success")
    return {
      type: CONTRACT_POST_SUCCESS,
      payload: data,
    };
  }
  export function contractPostError(data) {
    toastMessage("Operation Failed. Please, Try again.", "error")
    return {
      type: CONTRACT_POST_ERROR,
      payload: data,
    };
  }