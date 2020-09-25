import axios from 'axios';
import * as actionTypes from '../actiontypes';
import { url } from '../../utility/config';
import qs from 'qs';
import { authSuccess } from './auth';



//REGISTER
export const registerUser = (res, history) => async (dispatch) => {
  var data = qs.stringify({
    'name': res.name,
    'companyName': res.companyName,
    'phone': res.phone,
    'password': res.password,
  });
  let register_url = url + '/api/user/register/' + res.userId

  var config = {
    method: 'put',
    url: register_url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };
  axios(config)
    .then(function (res) {
      let result = JSON.stringify(res.data);
      let response = JSON.parse(result);
      // console.log(response)
      // console.log(response.statusCode)

      if (response.statusCode == 201) {
        dispatch({
          type: actionTypes.USER_REGISTER,
          payload: response
        });
        dispatch(authSuccess(response.token, response.userId))
        // history.push({ pathname: `/dashboard` });

      }
      history.push({ pathname: `/dashboard` });

      console.log(response)

    })
    .catch(error => console.log('error', error));
}


//CHECK EMAIL
export const userEmail = (res, history) => async (dispatch) => {
  var data = qs.stringify({ 'email': res });
  console.log(url);
  var config = {
    method: 'post',
    url: url + '/api/user/checkEmail',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  axios(config)
    .then(function (res) {
      console.log(res);
      let result = JSON.stringify(res.data);
      let response = JSON.parse(result)
      if (response.statusCode === 201) {
        dispatch({
          type: actionTypes.USER_EMAIL,
          payload: response
        })
        if (response.user || response.userName == null) {
          history.push({ pathname: `/register` })
        }

      }
      else if (response.statusCode === 200) {
        dispatch({
          type: actionTypes.USER_EMAIL,
          payload: response
        })
        history.push({ pathname: `/login` })

      }
    })

    .catch(function (error) {
      console.log(error);
    });

}
//resetPassword
export const resetPassword = (res) => async (dispatch) => {
  var data = qs.stringify({
    'email': res
  });
  var config = {
    method: 'post',
    url: url + '/forgotPassword',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

