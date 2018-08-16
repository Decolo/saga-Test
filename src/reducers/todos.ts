import { handleAction } from 'redux-actions';
import { addTodo, ADD_TODO_TYPE } from '../actions/todos'


interface State {
  foo: number
}

const todos = handleAction(ADD_TODO_TYPE, (state, action) => {
  // const { payload } = action
  // const { foo } = payload
  // const newState = {...state}
  // ++newState.foo
  return {
    foo: 1
  }
}, {
  foo: 1
})
export default todos
