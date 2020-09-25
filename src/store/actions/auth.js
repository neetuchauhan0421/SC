
import axios from 'axios';
import * as actionTypes from '../actiontypes';
import { url } from '../../utility/config';
import qs from 'qs';

// const url = "http://591ae37ab799.ngrok.io";


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        email:email,
        authRedirectPath:'/dashboard'
    };
};



export const authUnauthorized = (errorMsg) => {
    return {
        type: actionTypes.AUTH_INCORRECT_LOGIN_DETAILS,
        error: errorMsg,
    };
};
export const authFail = (errorMsg) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: errorMsg
    };
};

//USER LOGIN
export const loginUser = (signInData) => (dispatch) => {
  console.log(signInData.email);
  console.log(signInData.password);

  axios({
    method: 'post',
    url: url + '/api/user/login',
    data: qs.stringify({
      email: signInData.email,
      password:signInData.password
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
    //.post(`${url}/api/login`, signInData)
    .then(({data, status}) => {
      if (status === 200 ) {
        dispatch(authSuccess(data.token, data.userId,data.email));
        localStorage.setItem('token', data.token);
      }
    })
    .catch((err) => {
      console.log(err);
      if(err){
        if (err.response.status === 401){
          dispatch(authUnauthorized("Incorrect email address and / or password."));
        }
        if (err.response.status === 400) {
          dispatch(authFail(""));
        }
      }
      else{
        dispatch(authFail(""));
      }
    });
};


