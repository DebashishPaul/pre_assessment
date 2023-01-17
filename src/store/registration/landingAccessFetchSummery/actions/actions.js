import { FETCH_SUMMERY_REQUEST, FETCH_SUMMERY_SUCCESS, FETCH_SUMMERY_ERROR } from './actionType'

export function fetchSummeryGetRequest(data) {
    return {
      type: FETCH_SUMMERY_REQUEST,
      payload: data,
    };
  }
  export function fetchSummeryGetSuccess(data) {
    return {
      type: FETCH_SUMMERY_SUCCESS,
      payload: data,
    };
  }
  export function fetchSummeryGetError(data) {
    return {
      type: FETCH_SUMMERY_ERROR,
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

