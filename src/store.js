import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]

let initialState = {}

export default createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware)
))