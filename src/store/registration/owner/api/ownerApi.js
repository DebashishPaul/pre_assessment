import { toast } from "@mobiscroll/react";
import { apiEndPoint } from "../../../../contants/Endpoints";
import { asyncLocalStorage } from "../../../../utils/asyncLocalStorage";
import { authAxios } from "../../../../utils/axiosWrapper";
import { ownerPutError, ownerPutRequest, ownerPutSuccess } from "../actions/actions";

export function putOwnerInfoSave(id, data, callback) {
  return (dispatch) => {
    dispatch(ownerPutRequest());
    authAxios
      .put(apiEndPoint.CREATE_OWNER + id, data)
      .then((response) => {
        dispatch(ownerPutSuccess(response.data));
        console.log("response: ",response.status)
        toast({
          message: "Request Processed Successfully!",
          type: "success",
          position: "top",
          icon: "success",
        })
        asyncLocalStorage.setItem('contractId', response.data.contractId)
        if(response.status === 200){
          callback()
        }else{
          window.alert("form already submitted!")
        }
      })
      .catch((error) => {
        dispatch(ownerPutError(error));
        toast({
          message: "Operation Failed. Please, Try again.",
          type: "error",
          position: "top",
          icon: "error",
        })
      });
  };
}