import { UserType } from "../../../../contants/Constants";
import { apiEndPoint } from "../../../../contants/Endpoints";
import { asyncLocalStorage } from "../../../../utils/asyncLocalStorage";
import { authAxios } from "../../../../utils/axiosWrapper";
import {
  hotelsGetRequest,
  hotelsGetSuccess,
  hotelsGetError,
  hotelsGetDetailsRequest,
  hotelsGetDetailsSuccess,
  hotelsGetDetailsError
} from "../action/actions";


export function hotelsInfo(userType, contractId) {
  return (dispatch) => {
    dispatch(hotelsGetRequest());
    authAxios
      .get(
        userType == UserType.USER
          ? apiEndPoint.FETCH_HOTELS_INFO + `?requestId=wer`
          : apiEndPoint.FETCH_HOTELS_INFO_ADMIN + `${contractId}/property?requestId=wer`
      )
      .then((response) => {
        dispatch(hotelsGetSuccess(response.data));
        console.log(response);
      })
      .catch((error) => {
        dispatch(hotelsGetError(error));
        console.log(error.response);
      });
  };
}

export function hotelsDetails(userType, hotelId) {
  return (dispatch) => {
    dispatch(hotelsGetDetailsRequest());
    authAxios
      .get(
        userType == UserType.USER
          ? apiEndPoint.FETCH_HOTELS_DETAILS + `${hotelId}?requestId=wer`
          : apiEndPoint.FETCH_HOTELS_DETAILS_ADMIN + `${hotelId}?requestId=wer`
      )
      .then((response) => {
        dispatch(hotelsGetDetailsSuccess(response.data));
        console.log(response, "hotel each data");
      })
      .catch((error) => {
        dispatch(hotelsGetDetailsError(error.response.data.message));
        console.log(error.response);
      });
  };
}

