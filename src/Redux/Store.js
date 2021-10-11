import { applyMiddleware, combineReducers, createStore } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import { dashboardReducer } from "./Reducer";

const rootreducer = combineReducers({
  dashboard: dashboardReducer,
});
const store = createStore(rootreducer, compose(applyMiddleware(thunk)));

export default store;
