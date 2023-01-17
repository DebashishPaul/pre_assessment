import { combineReducers } from "redux";
import {
  adminContractGetReducer,
  categoriesDetailsGetReducer,
  categoriesInfoGetReducer,
  documentsInfoGetReducer,
  ownerInfoGetReducer,
} from "./admin/adminContract/reducers/adminContractReducer";
import { submitReviewReducer } from "./admin/review/reducers/reviewReducer";
import { hotelsInfoDetailsGetReducer, hotelsInfoGetReducer } from "./admin/hotel/reducers/adminContractReducer";
import { contractInfoGetReducer } from "./admin/contract/reducers/adminContractReducer";

const rootReducer = combineReducers({
  adminContractGetReducer: adminContractGetReducer,

  ownerInfoGetReducer: ownerInfoGetReducer,
  contractInfoGetReducer: contractInfoGetReducer,
  documentsInfoGetReducer: documentsInfoGetReducer,
  hotelsInfoGetReducer: hotelsInfoGetReducer,
  hotelsInfoDetailsGetReducer: hotelsInfoDetailsGetReducer,
  categoriesInfoGetReducer: categoriesInfoGetReducer,
  categoriesDetailsGetReducer: categoriesDetailsGetReducer,
  submitReviewReducer: submitReviewReducer,
});

export default rootReducer;
