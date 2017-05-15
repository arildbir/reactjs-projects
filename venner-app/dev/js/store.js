import {applyMiddleware, createStore } from "redux"
//import thunk from "redux-thunk"
//import logger from "redux-logger"
//import promise from "redux-promise-middleware"

import combinedReducers from './reducers/index'

//const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(combinedReducers);  //dette er det faste store objektet - alle data i webappen.
