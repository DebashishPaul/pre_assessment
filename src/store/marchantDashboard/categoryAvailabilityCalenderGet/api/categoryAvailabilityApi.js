import { UserType } from "../../../../contants/Constants";
import { apiForDashboard } from "../../../../contants/Endpoints";
import { asyncLocalStorage } from "../../../../utils/asyncLocalStorage";
import { authAxios } from "../../../../utils/axiosWrapper";
import {
  categoryGetAvailabilityRequest,
  categoryGetAvailabilitySuccess,
  categoryGetAvailabilityError,
  // categoryPostAvailabilityRequest,
  // categoryPostAvailabilitySuccess,
  // categoryPostAvailabilityError
} from "../action/actions";


export function categoryAvailabilityGetApi(fetchId, startDate, endDate, fetchApi) {
  console.log("getAvailableDate")
  return (dispatch) => {
    console.log("getAvailableDate")
    dispatch(categoryGetAvailabilityRequest());
    authAxios
      .get(
        fetchApi ==  "category"?
        apiForDashboard.CATEGORY_AVAILABILITY + `${fetchId}?endDate=${endDate}&requestId=WEREW&startDate=${startDate}` :
        apiForDashboard.HOTEL_CALENDAR_AVAILABILITY + `${fetchId}?endDate=${endDate}&requestId=WEREW&startDate=${startDate}`
      )
      .then((response) => {
        dispatch(categoryGetAvailabilitySuccess(response.data));
        console.log(response);
      })
      .catch((error) => {
        dispatch(categoryGetAvailabilityError(error));
        console.log(error.response);
      });
  };
}

// export function categoryAvailabilityPostApi(categoryId, data) {
//   return (dispatch) => {
//     dispatch(categoryPostAvailabilityRequest());
//     authAxios
//       .post(
//         apiForDashboard.CATEGORY_AVAILABILITY + categoryId, data
//       )
//       .then((response) => {
//         dispatch(categoryPostAvailabilitySuccess(response.data));
//         console.log(response, "category availality post");
//       })
//       .catch((error) => {
//         dispatch(categoryPostAvailabilityError(error.response.data.message));
//         console.log(error.response);
//       });
//   };
// }

