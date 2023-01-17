import { apiEndPoint } from "../../../../contants/Endpoints";
// import { asyncLocalStorage } from "../../../../utils/asyncLocalStorage";
import { authAxios } from "../../../../utils/axiosWrapper";
import { termsAndConditionsGetRequest, termsAndConditionsGetSuccess, termsAndConditionsGetError } from "../actions/actions";


export function termsAndConditionsGet() {
  console.log("termsAndConditions")
    return (dispatch) => {
      console.log("termsAndConditions")
      dispatch(termsAndConditionsGetRequest());
      authAxios
        .get(apiEndPoint.FETCH_TERMS_AND_CONDITIONS + `?requestId=werew`)
        .then((response) => {
          dispatch(termsAndConditionsGetSuccess(response.data));
          console.log("termsAndConditions",response)
        })
        .catch((error) => {
          dispatch(termsAndConditionsGetError(error));
          console.log("termsAndConditions")
        //   toast.error(error.response.data.message);
        });
    };
  }
