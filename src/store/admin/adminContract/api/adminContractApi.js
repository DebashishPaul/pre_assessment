import { UserType } from "../../../../contants/Constants";
import { apiEndPoint } from "../../../../contants/Endpoints";
import { asyncLocalStorage } from "../../../../utils/asyncLocalStorage";
import { authAxios } from "../../../../utils/axiosWrapper";
import {
  adminContractGetRequest,
  adminContractGetSuccess,
  adminContractGetError,
  ownerGetRequest,
  ownerGetSuccess,
  ownerGetError,
  contractGetRequest,
  contractGetSuccess,
  contractGetError,
  documentsGetRequest,
  documentsGetSuccess,
  documentsGetError,
  hotelsGetRequest,
  hotelsGetSuccess,
  hotelsGetError,
  categoriesGetRequest,
  categoriesGetSuccess,
  categoriesGetError,
  categoriesDetailsGetRequest,
  categoriesDetailsGetSuccess,
  categoriesDetailsGetError,
} from "../action/actions";

export function adminContractGet(contractId) {
  return (dispatch) => {
    dispatch(adminContractGetRequest());
    authAxios
      .get(apiEndPoint.ADMIN_CONTRACT + `${contractId}?requestId=dwe`)
      .then((response) => {
        dispatch(adminContractGetSuccess(response.data));
        console.log(response, "initStateAdminContract");
      })
      .catch((error) => {
        dispatch(adminContractGetError(error.response.data.message));
        console.log(error.response);
        //   toast.error(error.response.data.message);
      });
  };
}


export function ownerInfo(userType, ownerId) {
    return (dispatch) => {
      dispatch(ownerGetRequest());
      authAxios
        .get(
          userType == UserType.USER
            ? apiEndPoint.FETCH_OWNER_INFO + `?requestId=wer`
            : apiEndPoint.FETCH_OWNER_INFO_ADMIN + `${ownerId}/owner?requestId=erte`
        )
        .then((response) => {
          dispatch(ownerGetSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          dispatch(ownerGetError(error.response.data.message));
          console.log(error.response);
        });
    };
  }


  // done
  export function documentsInfo(userType, contractId) {
    return (dispatch) => {
      dispatch(documentsGetRequest());
      console.log(userType, "contractIdcontractId")
      authAxios
        .get(
          userType == UserType.USER
            ? apiEndPoint.FETCH_DOCUMENTS_INFO + `?requestId=werwr`
            : apiEndPoint.FETCH_DOCUMENTS_INFO_ADMIN + `${contractId}/document?requestId=werwe`
        )
        .then((response) => {
          dispatch(documentsGetSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          dispatch(documentsGetError(error));
          console.log(error.response);
          //   toast.error(error.response.data.message);
        });
    };
  }




  export function categoriesInfo(userType, contractId) {
    return (dispatch) => {
      dispatch(categoriesGetRequest());
      authAxios
        .get(
          userType == UserType.USER
            ? apiEndPoint.FETCH_CATEGORYS_INFO + `?requestId=fref`
            : apiEndPoint.FETCH_CATEGORYS_INFO_ADMIN + `${contractId}/category?requestId=wer`
        )
        .then((response) => {
          dispatch(categoriesGetSuccess(response.data));
          console.log(response);
        })
        .catch((error) => {
          dispatch(categoriesGetError(error.response.data.message));
          console.log(error.response);
          //   toast.error(error.response.data.message);
        });
    };
  }

  export function categorieDetails(userType, categoryId) {
    return (dispatch) => {
      dispatch(categoriesDetailsGetRequest());
      authAxios
        .get(
          userType == UserType.USER
            ? apiEndPoint.FETCH_CATEGORY_DETAILS + `${categoryId}?requestId=wrwer`
            : apiEndPoint.FETCH_CATEGORY_DETAILS_ADMIN + `${categoryId}?requestId=erter`
        )
        .then((response) => {
          dispatch(categoriesDetailsGetSuccess(response.data));
          
        })
        .catch((error) => {
          dispatch(categoriesDetailsGetError(error));
          console.log(error.response);
          //   toast.error(error.response.data.message);
        });
    };
  }