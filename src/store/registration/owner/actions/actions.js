import { toastMessage } from '../../../../utils/toast';
import { OWNER_PUT_REQUEST, OWNER_PUT_SUCCESS, OWNER_PUT_ERROR } from './actionType'

export function ownerPutRequest(data) {
    return {
      type: OWNER_PUT_REQUEST,
      payload: data,
    };
  }
  
  export function ownerPutSuccess(data) {
    toastMessage("Request Processed Successfully!", "success")
    return {
      type: OWNER_PUT_SUCCESS,
      payload: data,
    };
  }
  export function ownerPutError(data) {
    toastMessage("Operation Failed. Please, Try again.", "error")
    return {
      type: OWNER_PUT_ERROR,
      payload: data,
    };
  }
// export const OwnerPutRequestAction = (number) => async (dispatch) => {
//     try {
//       dispatch({
//         type: OWNER_PUT_REQUEST,
//       })
  
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
  
//       let form_data = new FormData();
//       form_data.append("dateOfBirth", "2022-02-16T17:59:45.493Z");
//       form_data.append("firstName", "string");
//       form_data.append("lastName", "string");
//       form_data.append("middleName", "+8801762746333");
//       form_data.append("nid", "string");
//       form_data.append("tin", "string");
//       form_data.append("title", "string");
//       form_data.append("website","string");

//       const { data } = await axios.put(
//         form_data,
//         config
//       )
  
//       dispatch({
//         type: OWNER_PUT_SUCCESS,
//         payload: data,
//       })
  
//       console.log(data)
//     } catch (error) {
//       dispatch({
//         type: OWNER_PUT_FAILUER,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       })
//     }
//   }

