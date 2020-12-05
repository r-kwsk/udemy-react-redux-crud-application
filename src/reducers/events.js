import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT,UPDATE_EVENT, READ_EVENT, CREATE_EVENTS } from "../actions";

//eventsはstateのこと．わかりやすく名前を変更
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
    case UPDATE_EVENT:
    case CREATE_EVENTS:
      const data = action.response.data;
      // console.log(action.response.data)
      // {id: 7, title: "Let's have an event 7!", ...}
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id]; //eventにおけるactionから渡ってくるidを削除．deleteはjsの基本機能
      return events; //削除後のeventsを再レンダリング
    default:
      return events;
  }
}
