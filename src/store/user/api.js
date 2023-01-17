import { apiEndPoint } from "../../contants/Endpoints";
import { noAuthAxios } from "../../utils/axiosWrapperOpen";
import { assignFuncationToRoleError, assignFuncationToRoleRequest, assignFuncationToRoleSuccess, createFunctionError, createFunctionRequest, createFunctionSuccess, createRoleError, createRoleRequest, createRoleSuccess, deleteFunctionError, deleteFunctionRequest, deleteFunctionSuccess, deleteRoleError, deleteRoleRequest, deleteRoleSuccess, editFunctionError, editFunctionRequest, editFunctionSuccess, editRoleError, editRoleRequest, editRoleSuccess, fetchFuncationToRoleError, fetchFuncationToRoleRequest, fetchFuncationToRoleSuccess, fetchFunctionError, fetchFunctionRequest, fetchFunctionSuccess, fetchRoleError, fetchRoleRequest, fetchRoleSuccess, signInError, signInRequest, signInSuccess, signUpError, signUpRequest, signUpSuccess } from "./actions/actions";
import { asyncLocalStorage } from "../../utils/asyncLocalStorage";
import { authAxios } from "../../utils/axiosWrapper";
import { toast } from "@mobiscroll/react";
import { toastMessage } from "../../utils/toast";
export function getUserDetails(values) {
  return (dispatch) => {
    // await Service.get(
    //     "https://jsonplaceholder.typicode.com/todos",
    //     (status, data) => {
    //       console.log("****** response is *******", status, data);
    //     }
    //   );
  };
}

export function signUp(data) {
  return (dispatch) => {
    dispatch(signUpRequest());
    noAuthAxios
      .post(apiEndPoint.SIGNUP, data)
      .then((response) => {
        // asyncLocalStorage
        //   .setItem("jwt", response.data.data.jwtToken)
        //   .then(() => {
            // return asyncLocalStorage.setItem("jwt", response.data.data.jwtToken);
      //     })
      //     .then((token) => {
            dispatch(signUpSuccess(response.data));
            // toast({
            //   message: "Sign-up Completed! Please Sign-in Now.",
            //   type: "success",
            //   position: "top",
            //   icon: "success",
            // })
            
            // window.alert("Sign-up Completed! Please Sign-in Now.")
            window.location.reload();
      //     });
      //   console.log(response);
      })
      .catch((error) => {
        dispatch(signUpError(error.response.data.message));
        // toast({
        //   message: error.response.data.message,
        //   type: "error",
        //   position: "top",
        //   icon: "error",
        // })
      });
  };
}


export function signIn(data) {
  return (dispatch) => {
    dispatch(signInRequest());
    noAuthAxios
      .post(apiEndPoint.SIGNIN, data)
      .then((response) => {
        asyncLocalStorage
          .setItem("jwt", response.data.accessToken)
          .then(() => {
            asyncLocalStorage.setItem("refreshToken", response.data.refreshToken);
            // dispatch(signInSuccess(response.data));
          })
          asyncLocalStorage
          .setItem("id", response.data.userId)
          .then(() => {
            // dispatch(signInSuccess(response.data));
          })
            dispatch(signInSuccess(response.data));
            console.log(response, "responseresponse")
            

      })
      .catch((error) => {
        console.log(error);
        dispatch(signInError(error));
        // toast({
        //   message: error.response.data.message,
        //   type: "error",
        //   position: "top",
        //   icon: "error",
        // })
      });
  };
}


// create role function
export function createRole(data, setFlag) {
  return (dispatch) => {
    dispatch(createRoleRequest());
    authAxios
      .post(apiEndPoint.CREATE_ROLE, data)
      .then((response) => {
        dispatch(createRoleSuccess(response.data));
        setFlag(Math.random())
      })
      .catch((error) => {
        dispatch(createRoleError(error));
      });
  };
}

// edit role
export function editRole(id, data, setFlag) {
  return (dispatch) => {
    dispatch(editRoleRequest());
    authAxios
      .put(apiEndPoint.EDIT_ROLE + `${id}`, data)
      .then((response) => {
        dispatch(editRoleSuccess(response.data));
        setFlag(Math.random())
      })
      .catch((error) => {
        dispatch(editRoleError(error));
      });
  };
}

//delete role
export function deleteRole(id, setFlag) {
  return (dispatch) => {
    dispatch(deleteRoleRequest());
    authAxios
      .delete(apiEndPoint.DELETE_ROLE + `${id}?requestId=qew`)
      .then((response) => {
        dispatch(deleteRoleSuccess(response.data));
        setFlag(Math.random())
      })
      .catch((error) => {
        dispatch(deleteRoleError(error));
      });
  };
}

// fetch roles
export function fetchRoles(pageNo, pageSize) {
  return (dispatch) => {
    dispatch(fetchRoleRequest());
    authAxios
      .get(apiEndPoint.FETCH_ROLE + `?pageNo=${pageNo}&pageSize=${pageSize}&requestId=qwe`)
      .then((response) => {
        dispatch(fetchRoleSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchRoleError(error));
      });
  };
}

// create function
export function createFunction(data, setFlag) {
  return (dispatch) => {
    dispatch(createFunctionRequest());
    authAxios
      .post(apiEndPoint.CREATE_FUNCTION, data)
      .then((response) => {
        dispatch(createFunctionSuccess(response.data));
        setFlag(Math.random())
      })
      .catch((error) => {
        dispatch(createFunctionError(error));
      });
  };
}

// fetch functions
export function fetchFunctions(pageNo, pageSize, setFlag) {
  return (dispatch) => {
    dispatch(fetchFunctionRequest());
    authAxios
      .get(apiEndPoint.FETCH_FUNCTION + `?pageNo=${pageNo}&pageSize=${pageSize}&requestId=gfhj`)
      .then((response) => {
        dispatch(fetchFunctionSuccess(response.data));
        setFlag(Math.random())
      })
      .catch((error) => {
        dispatch(fetchFunctionError(error));
      });
  };
}

// edit function
export function editFunction(id, data, setFlag) {
  return (dispatch) => {
    dispatch(editFunctionRequest());
    authAxios
      .put(apiEndPoint.EDIT_FUNCTION + `${id}`, data)
      .then((response) => {
        dispatch(editFunctionSuccess(response.data));
        setFlag(Math.random())
      })
      .catch((error) => {
        dispatch(editFunctionError(error));
      });
  };
}

// delete function
export function deleteFunction(id, setFlag) {
  return (dispatch) => {
    dispatch(deleteFunctionRequest());
    authAxios
      .delete(apiEndPoint.DELETE_FUNCTION + `${id}?requestId=wqe`)
      .then((response) => {
        dispatch(deleteFunctionSuccess(response.data));
        setFlag(Math.random())
      })
      .catch((error) => {
        dispatch(deleteFunctionError(error));
      });
  };
}

// get function to role list
export function fetchFunctionsToRoleList(id) {
  console.log("textfortest")
  return (dispatch) => {
    console.log("textfortest")
    dispatch(fetchFuncationToRoleRequest());
    authAxios
      .get(apiEndPoint.GET_FUNCTION_TO_ROLE + `${id}/function?requestId=qwe`)
      .then((response) => {
        dispatch(fetchFuncationToRoleSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFuncationToRoleError(error));
      });
  };
}

// assign function to role list
export function assignFunctionsToRoleList(id, data) {
  return (dispatch) => {
    dispatch(assignFuncationToRoleRequest());
    authAxios
      .patch(apiEndPoint.ASSIGN_FUNCTION_ROLE + `${id}/function`, data)
      .then((response) => {
        dispatch(assignFuncationToRoleSuccess(response.data));
      })
      .catch((error) => {
        dispatch(assignFuncationToRoleError(error));
      });
  };
}