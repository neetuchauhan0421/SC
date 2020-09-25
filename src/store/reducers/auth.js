
import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_INCORRECT_LOGIN_DETAILS
} from '../actiontypes';

const initialState = {
    token: null,
    isLoggedIn:false,
    userId: null,
    email: "",
    error: false,
    errorMessage:null,
    loading: false,
    authRedirectPath: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading:true,
      };
    case AUTH_SUCCESS:
        return {
            ...state,
            token:action.token,
            userId:action.userId,
            email:action.email,
            isLoggedIn: true,
            error:false,
            loading:false,
            authRedirectPath:'/dashboard'
        }
    case AUTH_INCORRECT_LOGIN_DETAILS:
        return {
            ...state,
            error:true,
            errorMessage:action.error,
            loading:false
        }
    case AUTH_FAIL:
        return {
            ...state,
            error:true,
            errorMessage:action.error,
            loading:false
        }
    default:
            return state;
  }
}
