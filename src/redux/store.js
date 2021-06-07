import { createStore, combineReducers, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { icecreamReducer } from "./icecream/icecreamReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
