import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
} from '../actiontypes';

const initialState = {
    data:[],
    error: false,
    errorMessage:null,
    loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
        return {
            ...state,
            loading:true,
        };
    case FETCH_SUCCESS:
        return  {
            ...state,
            data:action.data,
            loading:false,
        }
    case FETCH_FAIL:
        return {
            ...state,
            loading:false,
            error:true,
            errorMessage:action.errorMessage
        };
    default:
        return state
  }
}
    