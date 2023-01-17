import {
  ADMIN_CONTRACT_REQUEST,
  ADMIN_CONTRACT_SUCCESS,
  ADMIN_CONTRACT_ERROR,
  CONTRACT_INFO_GET_REQUEST,
  CONTRACT_INFO_GET_SUCCESS,
  CONTRACT_INFO_GET_ERROR,
  OWNER_INFO_GET_ERROR,
  OWNER_INFO_GET_SUCCESS,
  OWNER_INFO_GET_REQUEST,
  DOCUMENTS_INFO_GET_REQUEST,
  DOCUMENTS_INFO_GET_SUCCESS,
  DOCUMENTS_INFO_GET_ERROR,
  HOTELS_INFO_GET_ERROR,
  HOTELS_INFO_GET_SUCCESS,
  HOTELS_INFO_GET_REQUEST,
  CATEGORIES_INFO_GET_REQUEST,
  CATEGORIES_INFO_GET_SUCCESS,
  CATEGORIES_INFO_GET_ERROR,
  CATEGORIES_DETAILS_GET_REQUEST,
  CATEGORIES_DETAILS_GET_SUCCESS,
  CATEGORIES_DETAILS_GET_ERROR,
} from "../action/actionType";

const initStateOwner = {
  loading: false,
  data: [],
  error: "",
};
const initStateContract = {
  loading: false,
  data: [],
  error: "",
};
const initStateDocument = {
  loading: false,
  data: [],
  error: "",
};
const initStateCategory = {
  loading: false,
  data: [],
  error: "",
};
const initStateCategoryDetails = {
  loading: false,
  data: [],
  error: "",
}
const initStateAdminContract = {
  loading: false,
  data: [],
  error: "",
};

export function adminContractGetReducer(state = initStateAdminContract, action) {
  switch (action.type) {
    case ADMIN_CONTRACT_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case ADMIN_CONTRACT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case ADMIN_CONTRACT_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export function ownerInfoGetReducer(state = initStateOwner, action) {
  switch (action.type) {
    case OWNER_INFO_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case OWNER_INFO_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case OWNER_INFO_GET_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export function documentsInfoGetReducer(state = initStateDocument, action) {
  switch (action.type) {
    case DOCUMENTS_INFO_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case DOCUMENTS_INFO_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case DOCUMENTS_INFO_GET_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export function categoriesInfoGetReducer(state = initStateCategory, action) {
  switch (action.type) {
    case CATEGORIES_INFO_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CATEGORIES_INFO_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CATEGORIES_INFO_GET_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export function categoriesDetailsGetReducer(state = initStateCategoryDetails, action) {
  switch (action.type) {
    case CATEGORIES_DETAILS_GET_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CATEGORIES_DETAILS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CATEGORIES_DETAILS_GET_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}