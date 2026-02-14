import { combineReducers, createStore } from "redux";
import CountReducer from "./reducers/CountReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  counter: CountReducer,
  user: UserReducer
});

const store = createStore(rootReducer);
export default store;
