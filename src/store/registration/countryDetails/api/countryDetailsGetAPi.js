import { apiEndPoint } from "../../../../contants/Endpoints";
import { authAxios } from "../../../../utils/axiosWrapper";
import { countryGetError, countryGetRequest, countryGetSuccess } from "../action/actions";

export function countryDetailsGet(id) {
    return (dispatch) => {
        dispatch(countryGetRequest());
        authAxios
        .get(apiEndPoint.GET_COUNTRY_DETAILS + "?requestId=" + id)
        .then((response) => {
            dispatch(countryGetSuccess(response.data));
            console.log(response, "hi i am success")
        })
        .catch((error) => {
            dispatch(countryGetError(error.response.data.message));
        //   toast.error(error.response.data.message);
        });
    };
}