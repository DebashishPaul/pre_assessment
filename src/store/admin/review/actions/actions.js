import { toastMessage } from '../../../../utils/toast';
import { SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_ERROR } from './actionType'

export function submitReviewRequest(data) {
    return {
      type: SUBMIT_REVIEW_REQUEST,
      payload: data,
    };
  }
  export function submitReviewSuccess(data) {
    toastMessage("Request Processed Successfully!", "success")
    return {
      type: SUBMIT_REVIEW_SUCCESS,
      payload: data,
    };
  }
  export function submitReviewError(data) {
    toastMessage("Operation Failed. Please, Try again.", "error")
    return {
      type: SUBMIT_REVIEW_ERROR,
      payload: data,
    };
  }

