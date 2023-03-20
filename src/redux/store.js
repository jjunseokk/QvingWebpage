import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk' //추가
import rootReducer from "./reducer";

let store = createStore(rootReducer, applyMiddleware(thunk));


export default store;