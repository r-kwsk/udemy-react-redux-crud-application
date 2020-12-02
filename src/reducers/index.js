//全reducerを結合するためのファイル
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
