import { apiEndPoint, baseUrl } from "../../../../contants/Endpoints";
import axios from "axios";
import {
  productGetRequest,
  productGetSuccess,
  productGetError,
  productGetDetailsRequest,
  productGetDetailsSuccess,
  productGetDetailsError
} from "../action/actions";


export function productsInfo() {
  return (dispatch) => {
    dispatch(productGetRequest());
    axios
      .get(baseUrl + apiEndPoint.GET_PRODUCT
        )
      .then((response) => {
        dispatch(productGetSuccess(response.data));
        // console.log(response, "response");
      })
      .catch((error) => {
        dispatch(productGetError(error));
        console.log(error.response);
      });
  };
}

export function productDetails(productId) {
  return (dispatch) => {
    dispatch(productGetDetailsRequest());
    axios
      .get(
        baseUrl + apiEndPoint.GET_PRODUCT + productId
        )
      .then((response) => {
        dispatch(productGetDetailsSuccess(response.data));
        console.log(response, "product each data");
      })
      .catch((error) => {
        dispatch(productGetDetailsError(error.response.data.message));
        console.log(error.response);
      });
  };
}

