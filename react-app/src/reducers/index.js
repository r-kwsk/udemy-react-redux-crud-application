//全reducerを一つにまとめる役割
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz });