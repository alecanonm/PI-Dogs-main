import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

export default store;
