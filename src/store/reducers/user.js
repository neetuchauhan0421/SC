import {
    USER_LOGIN,
    USER_EMAIL,
    USER_REGISTER,
} from '../actiontypes';

const initialState = {
    token: null,
    userId: 0,
    email: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

export default function (state = initialState, action) {
    switch (action.type) {
      case USER_LOGIN:
        return {
          ...state,
          login: action.payload,
        };
      case USER_REGISTER:
        return {
          ...state,
          user_register: action.payload,
          // userId:action.payload.userId
        };
      case USER_EMAIL:
        return {
          ...state,
          login: action.payload,
          userId: action.payload.userId,
          email:action.payload.email,
        };
      default:
              return state;
    }
  }
  