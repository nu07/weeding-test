import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer/reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { compose } from 'redux';

// const composeEnhancers =
//   typeof window !== "undefined"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;

// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware))
// );
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
