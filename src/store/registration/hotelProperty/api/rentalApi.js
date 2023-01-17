import { toast } from "@mobiscroll/react";
import { apiEndPoint } from "../../../../contants/Endpoints";
import { authAxios } from "../../../../utils/axiosWrapper";
import {
  hotelPropertyPostRequest,
  hotelPropertyPostSuccess,
  hotelPropertyPostError,
} from "../action/actions";

export function postHotelPropertyInfoSave(
  data,
  images,
  callBack
) {
  console.log("data: ", data);
  return (dispatch) => {
    dispatch(hotelPropertyPostRequest());
    authAxios
      .post(apiEndPoint.CREATE_HOTEL_PROPERTY, data)
      .then((response) => {
        dispatch(hotelPropertyPostSuccess(response.data.data));
        console.log(response,"datareducers");

        authAxios
          .post(apiEndPoint.RENTAL_PROPERTY_IMAGE_UPLOAD, {
            images: images,
            rentalPropertyId: response.data.propertyData.id,
            requestId: "string",
          })
          .then((res) => {
            callBack();
          })
          .catch((error) => {
            callBack();
          });
      })
      .catch((error) => {
        dispatch(hotelPropertyPostError(error.response.data.message));
      });
  };
}
