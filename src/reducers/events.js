import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT } from '../actions'

//eventsはstateのこと．わかりやすく名前を変更
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id]//eventにおけるactionから渡ってくるidを削除
      return { ...events }//削除後のeventsを再レンダリング
    default:
      return events;
  }
}
