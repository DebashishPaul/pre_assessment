import { toast } from "@mobiscroll/react";
import { apiEndPoint } from "../../../../contants/Endpoints";
import { authAxios } from "../../../../utils/axiosWrapper";
import { contractPostRequest, contractPostSuccess, contractPostError } from "../action/actions";

// post a new contract

export function postContractInfoSave(data, callback) {
    return (dispatch) => {
        dispatch(contractPostRequest());
        authAxios
        .post(apiEndPoint.CREATE_CONTRACT, data)
        .then((response) => {
            dispatch(contractPostSuccess(response.data.data));
            console.log(response)
            callback()
        })
        .catch((error) => {
            dispatch(contractPostError(error.response.data.message));
            if(error.message === "Request failed with status code 400"){
                console.log(error)
            }
        });
    };
}


// edit contract

export function editContractInfoSave(data, callback) {
    return (dispatch) => {
        dispatch(contractPostRequest());
        authAxios
        .post(apiEndPoint.EDIT_CONTRACT, data)
        .then((response) => {
            dispatch(contractPostSuccess(response.data.data));
            console.log(response)
            callback()
        })
        .catch((error) => {
            dispatch(contractPostError(error.response.data.message));
            if(error.message === "Request failed with status code 400"){
                window.alert("Contract Info for the contract already exists")
            }
        });
    };
}