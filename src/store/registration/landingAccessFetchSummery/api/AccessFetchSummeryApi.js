import { apiEndPoint } from "../../../../contants/Endpoints";
// import { asyncLocalStorage } from "../../../../utils/asyncLocalStorage";
import { authAxios } from "../../../../utils/axiosWrapper";
import { fetchSummeryGetRequest, fetchSummeryGetSuccess, fetchSummeryGetError } from "../actions/actions";


export function fetchSummeryGet(id) {
    return (dispatch) => {
      dispatch(fetchSummeryGetRequest());
      authAxios
        .get(apiEndPoint.FETCH_SUMMERY + `${id}?requestId=wevfyge`)
        .then((response) => {
          dispatch(fetchSummeryGetSuccess(response.data));
          console.log("response fetch summery: ",response)
        })
        .catch((error) => {
          dispatch(fetchSummeryGetError(error));
        //   toast.error(error.response.data.message);
        });
    };
  }
