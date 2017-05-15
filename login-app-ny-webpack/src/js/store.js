import {applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
//import logger from "redux-logger"
//import promise from "redux-promise-middleware"

import combinedReducers from './reducers/index'

const middleware = applyMiddleware(thunk)

export default createStore(combinedReducers, middleware);  //dette er det faste store objektet - alle data i webappen.


//const store = createStore((state = {}) => state,compose(applyMiddleware(thunk)))
