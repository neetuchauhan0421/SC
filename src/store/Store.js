import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "./combinedReducer.js";

const initialState = {};
const middleware = [thunk];

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store =
  process.env.NODE_ENV === "development"
    ? createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware))
    )
    : createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware))
    );
export default store;