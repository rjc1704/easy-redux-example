import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todos from "../modules/todos";
import auth from "../modules/auth";

const rootReducer = combineReducers({ todos, auth });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
