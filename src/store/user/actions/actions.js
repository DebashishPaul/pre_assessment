import { toastMessage } from "../../../utils/toast";
import {
  ASSIGN_FUNCTION_TO_ROLE_ERROR,
  ASSIGN_FUNCTION_TO_ROLE_REQUEST,
  ASSIGN_FUNCTION_TO_ROLE_SUCCESS,
  CREATE_FUNCTION_ERROR,
  CREATE_FUNCTION_REQUEST,
  CREATE_FUNCTION_SUCCESS,
  CREATE_ROLE_ERROR,
  CREATE_ROLE_REQUEST,
  CREATE_ROLE_SUCCESS,
  DELETE_FUNCTION_ERROR,
  DELETE_FUNCTION_REQUEST,
  DELETE_FUNCTION_SUCCESS,
  DELETE_ROLE_ERROR,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_SUCCESS,
  EDIT_FUNCTION_ERROR,
  EDIT_FUNCTION_REQUEST,
  EDIT_FUNCTION_SUCCESS,
  EDIT_ROLE_ERROR,
  EDIT_ROLE_REQUEST,
  EDIT_ROLE_SUCCESS,
  FETCH_FUNCTION_ERROR,
  FETCH_FUNCTION_REQUEST,
  FETCH_FUNCTION_SUCCESS,
  FETCH_FUNCTION_TO_ROLE_ERROR,
  FETCH_FUNCTION_TO_ROLE_REQUEST,
  FETCH_FUNCTION_TO_ROLE_SUCCESS,
  FETCH_ROLE_ERROR,
  FETCH_ROLE_REQUEST,
  FETCH_ROLE_SUCCESS,
  GET_USER_DETAILS,
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "./actionType";

export function getUserDetailsAction(data) {
  return {
    type: GET_USER_DETAILS,
    payload: data,
  };
}

export function signInRequest(data) {
  return {
    type: SIGN_IN_REQUEST,
    payload: data,
  };
}

export function signInSuccess(data) {
  toastMessage("Sign-In Completed!", "success")
  return {
    type: SIGN_IN_SUCCESS,
    payload: data,
  };
}
export function signInError(data) {
  toastMessage("Error", "error")
  return {
    type: SIGN_IN_ERROR,
    payload: data,
  };
}

export function signUpRequest(data) {
  return {
    type: SIGN_UP_REQUEST,
    payload: data,
  };
}

export function signUpSuccess(data) {
  toastMessage("Sign-up Completed! Please Sign-in Now.", "success")
  return {
    type: SIGN_UP_SUCCESS,
    payload: data,
  };
}
export function signUpError(data) {
  toastMessage("Error", "error")
  return {
    type: SIGN_UP_ERROR,
    payload: data,
  };
}
// roles
export function createRoleRequest(data) {
  return {
    type: CREATE_ROLE_REQUEST,
    payload: data,
  };
}
export function createRoleSuccess(data) {
  toastMessage("Role Create Successfully", "success")
  return {
    type: CREATE_ROLE_SUCCESS,
    payload: data,
  };
}
export function createRoleError(data) {
  toastMessage("Role Create failed", "error")
  return {
    type: CREATE_ROLE_ERROR,
    payload: data,
  };
}

export function fetchRoleRequest(data) {
  return {
    type: FETCH_ROLE_REQUEST,
    payload: data,
  };
}
export function fetchRoleSuccess(data) {
  return {
    type: FETCH_ROLE_SUCCESS,
    payload: data,
  };
}
export function fetchRoleError(data) {
  return {
    type: FETCH_ROLE_ERROR,
    payload: data,
  };
}

export function editRoleRequest(data) {
  return {
    type: EDIT_ROLE_REQUEST,
    payload: data,
  };
}
export function editRoleSuccess(data) {
  toastMessage("Role Edit Successfully", "success")
  return {
    type: EDIT_ROLE_SUCCESS,
    payload: data,
  };
}
export function editRoleError(data) {
  toastMessage("Role Edit failed", "error")
  return {
    type: EDIT_ROLE_ERROR,
    payload: data,
  };
}

export function deleteRoleRequest(data) {
  return {
    type: DELETE_ROLE_REQUEST,
    payload: data,
  };
}
export function deleteRoleSuccess(data) {
  toastMessage("Role Delete Successfully", "success")
  return {
    type: DELETE_ROLE_SUCCESS,
    payload: data,
  };
}
export function deleteRoleError(data) {
  toastMessage("Role Delete failed", "error")
  return {
    type: DELETE_ROLE_ERROR,
    payload: data,
  };
}


// functions
export function createFunctionRequest(data) {
  return {
    type: CREATE_FUNCTION_REQUEST,
    payload: data,
  };
}
export function createFunctionSuccess(data) {
  toastMessage("Function Create Successfully", "success")
  return {
    type: CREATE_FUNCTION_SUCCESS,
    payload: data,
  };
}
export function createFunctionError(data) {
  toastMessage("Function Create failed", "error")
  return {
    type: CREATE_FUNCTION_ERROR,
    payload: data,
  };
}


export function fetchFunctionRequest(data) {
  return {
    type: FETCH_FUNCTION_REQUEST,
    payload: data,
  };
}
export function fetchFunctionSuccess(data) {
  return {
    type: FETCH_FUNCTION_SUCCESS,
    payload: data,
  };
}
export function fetchFunctionError(data) {
  return {
    type: FETCH_FUNCTION_ERROR,
    payload: data,
  };
}

export function editFunctionRequest(data) {
  return {
    type: EDIT_FUNCTION_REQUEST,
    payload: data,
  };
}
export function editFunctionSuccess(data) {
  toastMessage("Edit Permission Success", "success")
  return {
    type: EDIT_FUNCTION_SUCCESS,
    payload: data,
  };
}
export function editFunctionError(data) {
  toastMessage("Edit permission failed", "error")
  return {
    type: EDIT_FUNCTION_ERROR,
    payload: data,
  };
}


export function deleteFunctionRequest(data) {
  return {
    type: DELETE_FUNCTION_REQUEST,
    payload: data,
  };
}
export function deleteFunctionSuccess(data) {
  toastMessage("Delete Successfully", "success")
  return {
    type: DELETE_FUNCTION_SUCCESS,
    payload: data,
  };
}
export function deleteFunctionError(data) {
  toastMessage("Delete failed", "error")
  return {
    type: DELETE_FUNCTION_ERROR,
    payload: data,
  };
}

export function fetchFuncationToRoleRequest(data) {
  return {
    type: FETCH_FUNCTION_TO_ROLE_REQUEST,
    payload: data,
  };
}
export function fetchFuncationToRoleSuccess(data) {
  return {
    type: FETCH_FUNCTION_TO_ROLE_SUCCESS,
    payload: data,
  };
}
export function fetchFuncationToRoleError(data) {
  return {
    type: FETCH_FUNCTION_TO_ROLE_ERROR,
    payload: data,
  };
}

export function assignFuncationToRoleRequest(data) {
  return {
    type: ASSIGN_FUNCTION_TO_ROLE_REQUEST,
    payload: data,
  };
}
export function assignFuncationToRoleSuccess(data) {
  toastMessage("assign function to role Success", "success")
  return {
    type: ASSIGN_FUNCTION_TO_ROLE_SUCCESS,
    payload: data,
  };
}
export function assignFuncationToRoleError(data) {
  toastMessage("assign function to role not success", "error")
  return {
    type: ASSIGN_FUNCTION_TO_ROLE_ERROR,
    payload: data,
  };
}