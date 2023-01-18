import { combineReducers } from "redux";
import {
  adminContractGetReducer,
  categoriesDetailsGetReducer,
  categoriesInfoGetReducer,
  documentsInfoGetReducer,
  ownerInfoGetReducer,
} from "./admin/adminContract/reducers/adminContractReducer";
import { submitReviewReducer } from "./admin/review/reducers/reviewReducer";
import { contractInfoGetReducer } from "./admin/contract/reducers/adminContractReducer";

import {productGetReducer, productInfoDetailsGetReducer} from "./admin/products/reducers/productReducer"; //new

const rootReducer = combineReducers({
  productGetReducer: productGetReducer, //new
  productInfoDetailsGetReducer: productInfoDetailsGetReducer, //new

  adminContractGetReducer: adminContractGetReducer,
  ownerInfoGetReducer: ownerInfoGetReducer,
  contractInfoGetReducer: contractInfoGetReducer,
  documentsInfoGetReducer: documentsInfoGetReducer,
  categoriesInfoGetReducer: categoriesInfoGetReducer,
  categoriesDetailsGetReducer: categoriesDetailsGetReducer,
  submitReviewReducer: submitReviewReducer,
});

export default rootReducer;
