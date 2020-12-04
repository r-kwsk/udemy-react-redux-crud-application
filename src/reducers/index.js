//全reducerを結合するためのファイル
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
