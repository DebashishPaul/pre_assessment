import { combineReducers } from "redux";
import userDetailsReducer from "../store/user/reducers/userDetailsReducer";
import { signUpReducer } from "./user/reducers/signUpReducer";
import { signInReducer } from "./user/reducers/signInReducer";
import { ownerReducer } from "./registration//owner/reducers/ownerReducer";
import { contractReducer } from "./registration/contract/reducers/contractReducer";
import { hotelPropertyReducer } from "./registration/hotelProperty/reducers/contractReducer";
import { allCategoriesMerchantReducer, categoryReducer } from "./registration/category/reducers/categoryReducer";
import { fetchSummeryReducer } from "./registration/landingAccessFetchSummery/reducers/fetchSummeryReducer";
import {
  createFunctionReducer,
  createRoleReducer,
  fetchFunctionReducer,
  fetchRoleReducer,
  assignFunctionsToRoleReducers,
  fetchFunctionsToRoleReducers,
} from "./user/reducers/roleFunctionReducer";
import { countryDetailsReducer } from "./registration/countryDetails/reducers/countryDetailsReducer";
import {
  adminContractGetReducer,
  categoriesDetailsGetReducer,
  categoriesInfoGetReducer,
  documentsInfoGetReducer,
  ownerInfoGetReducer,
} from "./admin/adminContract/reducers/adminContractReducer";
import { submitReviewReducer } from "./admin/review/reducers/reviewReducer";
// import { hotelsInfoGetReducer } from "./admin/hotel/reducers/adminContractReducer";
import { hotelsInfoDetailsGetReducer, hotelsInfoGetReducer } from "./admin/hotel/reducers/adminContractReducer";
import { contractInfoGetReducer } from "./admin/contract/reducers/adminContractReducer";
import { categoryPostAvailabilityReducer } from "./marchantDashboard/categoryAvailability/reducers/categoryAvailabilityReducer";
import { termsAndConditionsReducer } from "./registration/termsAndConditions/reducers/termsAndConditionsReducer";
import { categoryGetAvailabilityReducer } from "./marchantDashboard/categoryAvailabilityCalenderGet/reducers/categoryAvailabilityReducer";

const rootReducer = combineReducers({
  userDetailsReducer: userDetailsReducer,
  signupReducer: signUpReducer,
  signinReducer: signInReducer,
  ownerReducer: ownerReducer,
  contractReducer: contractReducer,
  hotelPropertyReducer: hotelPropertyReducer,
  categoryReducer: categoryReducer,
  fetchSummeryReducer: fetchSummeryReducer,

  createRoleReducer: createRoleReducer,
  fetchRoleReducer: fetchRoleReducer,
  editRoleReducer: createFunctionReducer,
  deleteRoleReducer: createFunctionReducer,
  createFunctionReducer: createFunctionReducer,
  fetchFunctionReducer: fetchFunctionReducer,
  editFunctionReducer: createFunctionReducer,
  deleteFunctionReducer: createFunctionReducer,
  countryDetailsReducer: countryDetailsReducer,
  adminContractGetReducer: adminContractGetReducer,
  fetchFunctionsToRoleReducers: fetchFunctionsToRoleReducers,
  assignFunctionsToRoleReducers: assignFunctionsToRoleReducers,

  ownerInfoGetReducer: ownerInfoGetReducer,
  contractInfoGetReducer: contractInfoGetReducer,
  documentsInfoGetReducer: documentsInfoGetReducer,
  hotelsInfoGetReducer: hotelsInfoGetReducer,
  hotelsInfoDetailsGetReducer: hotelsInfoDetailsGetReducer,
  categoriesInfoGetReducer: categoriesInfoGetReducer,
  categoriesDetailsGetReducer: categoriesDetailsGetReducer,
  submitReviewReducer: submitReviewReducer,
  allCategoriesMerchantReducer:allCategoriesMerchantReducer,

  categoryGetAvailabilityReducer: categoryGetAvailabilityReducer,
  categoryPostAvailabilityReducer: categoryPostAvailabilityReducer,

  termsAndConditionsReducer: termsAndConditionsReducer,
});

export default rootReducer;
