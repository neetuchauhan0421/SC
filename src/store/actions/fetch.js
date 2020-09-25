import axios from 'axios';
import * as actionTypes from '../actiontypes';
import { devurl } from '../../utility/config';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    };
};

export const fetchSuccess = (data) => {
    
    return {
        type: actionTypes.FETCH_SUCCESS,
        data:data
    };
};

export const fetchFail = (errorMsg) => {
    return {
        type: actionTypes.FETCH_FAIL,
        error: errorMsg
    };
};

export const fetchData = (link) => (dispatch) => {
    dispatch(fetchStart());
    axios({
      method: 'get',
      url: devurl + link,
    })
      //.post(`${url}/api/login`, signInData)
      .then(({data, status}) => {
          dispatch(fetchSuccess(data));
      })
      .catch((err) => {
          dispatch(fetchFail(err));
        
      });
  };