import authReducer from './reducers/auth';
import fetchReducer from './reducers/fetch';
import userReducer from './reducers/user';
import { combineReducers } from "redux";


export default combineReducers({
    auth: authReducer,
    fetch: fetchReducer,
    user: userReducer,
});
