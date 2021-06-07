import { createStore, combineReducers, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { icecreamReducer } from "./icecream/icecreamReducer";
import { userReducer } from "./user/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
