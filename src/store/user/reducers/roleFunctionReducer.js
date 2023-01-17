import { FETCH_ROLE_REQUEST, FETCH_ROLE_SUCCESS, FETCH_ROLE_ERROR, CREATE_ROLE_REQUEST, CREATE_ROLE_SUCCESS, CREATE_ROLE_ERROR, FETCH_FUNCTION_REQUEST, FETCH_FUNCTION_SUCCESS, FETCH_FUNCTION_ERROR, CREATE_FUNCTION_REQUEST, CREATE_FUNCTION_SUCCESS, CREATE_FUNCTION_ERROR, DELETE_FUNCTION_REQUEST, DELETE_FUNCTION_SUCCESS, DELETE_FUNCTION_ERROR, EDIT_FUNCTION_REQUEST, EDIT_FUNCTION_SUCCESS, EDIT_FUNCTION_ERROR, EDIT_ROLE_REQUEST, EDIT_ROLE_SUCCESS, EDIT_ROLE_ERROR, DELETE_ROLE_REQUEST, DELETE_ROLE_SUCCESS, DELETE_ROLE_ERROR, FETCH_FUNCTION_TO_ROLE_REQUEST, FETCH_FUNCTION_TO_ROLE_SUCCESS, FETCH_FUNCTION_TO_ROLE_ERROR, ASSIGN_FUNCTION_TO_ROLE_REQUEST, ASSIGN_FUNCTION_TO_ROLE_SUCCESS, ASSIGN_FUNCTION_TO_ROLE_ERROR } from '../actions/actionType'

const initState = {
  loading: false,
  data: [],
  error: "",
};

// role reducers
export function fetchRoleReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case FETCH_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ROLE_ERROR:
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
export function createRoleReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CREATE_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_ROLE_ERROR:
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

export function editRoleReducer(state = initState, action) {
  switch (action.type) {
    case EDIT_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case EDIT_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case EDIT_ROLE_ERROR:
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

export function deleteRoleReducer(state = initState, action) {
  switch (action.type) {
    case DELETE_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_ROLE_ERROR:
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

// Function reducers
export function fetchFunctionReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_FUNCTION_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case FETCH_FUNCTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_FUNCTION_ERROR:
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
export function createFunctionReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_FUNCTION_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case CREATE_FUNCTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_FUNCTION_ERROR:
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


export function deleteFunctionReducer(state = initState, action) {
  switch (action.type) {
    case DELETE_FUNCTION_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case DELETE_FUNCTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case DELETE_FUNCTION_ERROR:
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


export function editFunctionReducer(state = initState, action) {
  switch (action.type) {
    case EDIT_FUNCTION_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case EDIT_FUNCTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case EDIT_FUNCTION_ERROR:
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
// get function to role list
export function fetchFunctionsToRoleReducers(state = initState, action) {
  switch (action.type) {
    case FETCH_FUNCTION_TO_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case FETCH_FUNCTION_TO_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_FUNCTION_TO_ROLE_ERROR:
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

// assign function to role list
export function assignFunctionsToRoleReducers(state = initState, action) {
  switch (action.type) {
    case ASSIGN_FUNCTION_TO_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
        // data:[],
        error: "",
      };
    case ASSIGN_FUNCTION_TO_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case ASSIGN_FUNCTION_TO_ROLE_ERROR:
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