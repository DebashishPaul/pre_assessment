import { UserType } from "../../../../contants/Constants";
import { apiEndPoint } from "../../../../contants/Endpoints";
import { asyncLocalStorage } from "../../../../utils/asyncLocalStorage";
import { authAxios } from "../../../../utils/axiosWrapper";
import {
  contractGetRequest,
  contractGetSuccess,
  contractGetError,
} from "../action/actions";

  export function contractInfo(userType, contractId) {
    console.log();
    return (dispatch) => {
      dispatch(contractGetRequest());
      authAxios
        .get(
          userType == UserType.USER
            ? apiEndPoint.FETCH_CONTRACT_INFO + `?requestId=dfd`
            : apiEndPoint.FETCH_CONTRACT_INFO_ADMIN +contractId+ `/contract-info?requestId=rwer`
        )
        .then((response) => {
          dispatch(contractGetSuccess(response.data));
          console.log(response, "responseresponser");
        })
        .catch((error) => {
          dispatch(contractGetError(error.response.data.message));
          console.log(error.response);
          //   toast.error(error.response.data.message);
        });
    };
  }
