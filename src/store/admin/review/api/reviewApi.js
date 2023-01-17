import { ReviewFor } from "../../../../contants/Constants";
import { apiEndPoint, apiEndPointForOwnerReviewSubmission, baseUrl } from "../../../../contants/Endpoints";
import { authAxios } from "../../../../utils/axiosWrapper";
import { submitReviewError, submitReviewRequest, submitReviewSuccess } from "../actions/actions";

export function reviewSubmission(reviewFor, id, data, setFetchSummeryCallAgain) {
  
  return (dispatch) => {
    dispatch(submitReviewRequest());
    let url = "";
    switch (reviewFor) {
      case ReviewFor.OWNER:
        url = apiEndPointForOwnerReviewSubmission.OWNER_REVIEW_SUBMIT + id;
        break;
      case ReviewFor.CONTRACT:
        url = apiEndPointForOwnerReviewSubmission.CONTRACT_REVIEW_SUBMIT + id + `/contract-info`;
        break;
      case ReviewFor.DOCUMENT:
        url =
          apiEndPointForOwnerReviewSubmission.DOCUMENT_REVIEW_SUBMIT +
          id +
          "/document";
        break;
      case ReviewFor.HOTEL:
        url = apiEndPointForOwnerReviewSubmission.HOTEL_REVIEW_SUBMIT + id;
        break;
      case ReviewFor.CATEGORY:
        url = apiEndPointForOwnerReviewSubmission.CATEGORY_REVIEW_SUBMIT + id;
        break;
      case ReviewFor.SUBMIT:
        url = apiEndPoint.SUBMIT_FOR_REVIEW + `${id}?requestId=qwe`;
        break;
      default:
        break;
    }

    authAxios
      .patch(url, data)
      .then((response) => {
        console.log("Submit data success")
        if(reviewFor == ReviewFor.SUBMIT){
          console.log("Submit data success")
          dispatch(submitReviewSuccess(response));
          console.log(response, "submitdata");
          setFetchSummeryCallAgain()
        }else{
          dispatch(submitReviewSuccess(response.data.data));
        }

        
      })
      .catch((error) => {
        dispatch(submitReviewError(error));
        console.log(error, "submitdataerror");
      });
  };
}
