import { handleActions } from 'redux-actions';
import { decrement, increment, INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../actions/couter'

interface State {
  num: number
}

const counter = handleActions(
  {
    [INCREMENT]: (state: State, action) => ({
      num: state.num + 1
    }),
    [DECREMENT]: (state: State, action) => ({
      num: state.num - 1
    })
  },
  { num: 0 }
);

export default counter