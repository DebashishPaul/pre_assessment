import { toast } from "@mobiscroll/react";
import { apiEndPoint } from "../../../../contants/Endpoints";
import { authAxios } from "../../../../utils/axiosWrapper";
import {
  categoryPostRequest,
  categoryPostSuccess,
  categoryPostError,
  getAllCategoriesMerchantRequest,
  getAllCategoriesMerchantSuccess,
  getAllCategoriesMerchantError,
} from "../actions/actions";

export function getAllCategoriesMerchant() {
  return (dispatch) => {
    dispatch(getAllCategoriesMerchantRequest());
    authAxios
      .get(`${apiEndPoint.FETCH_CATEGORYS_INFO}?requestId=sd`)
      .then((response) => {
        dispatch(getAllCategoriesMerchantSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAllCategoriesMerchantError(error));
      });
  };
}


export function postCategoryInfoNext(
  data,
  images,
  createContractMoveingDecideNext
) {
  console.log(images,"images");
  return (dispatch) => {
    dispatch(categoryPostRequest());
    authAxios
      .post(apiEndPoint.CREATE_CATEGORY, data)
      .then((response) => {
        dispatch(categoryPostSuccess(response.data));
        console.log("response: ", response.status);

        authAxios
          .post(apiEndPoint.CATEGORY_IMAGE_UPLOAD, {
            images: images,
            categoryId: response.data.roomCategoryList[0].roomCategoryId,
            requestId: "string",
          })
          .then((res) => {
            createContractMoveingDecideNext();
          }).catch((error) => {
            toast({
              message: "Category updated but found error in uploading image",
              type: "error",
            });
          }
        );
      })
      .catch((error) => {
        dispatch(categoryPostError(error));
      });
  };
}
