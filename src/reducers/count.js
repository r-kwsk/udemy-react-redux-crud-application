import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }//stateを変更する場合はオブジェクトで記述
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}
