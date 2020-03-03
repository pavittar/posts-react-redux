import { combineReducers } from 'redux'

import counterReducer from './counter'
import postReducer from './post'

export default combineReducers({
  counter: counterReducer,
  post: postReducer,
})