import { combineReducers } from 'redux'
import docReducer from './docReducer'
import userReducer from './userReducer'
import getuserReducer from './getusersReducer'
export default 
combineReducers({
    userReducer,
    docReducer,
    getuserReducer,
})
