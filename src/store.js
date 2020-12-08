import {createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers";
import thunk from "redux-thunk";
//import thunk for api calls, asyncReducer for the root reducer
//createStore for making the store/state and applymiddleware to use thunk




//Thunk middlware will simply execute a call back function be
const store = createStore(asyncReducer, applyMiddleware(thunk));

//Create the store, pass asynceReducer as the reducer (returns state) and applyMiddleware
//thunk to make api calls



//export the global state
export default store



//THis is the store, it holds the state or data for the app, Do not modify
//the store or the state in redux. We create a copy of state and mutate the copy
