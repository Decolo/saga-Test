import * as React from "react";
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from '../../actions/couter'
import Test from './test';

class Content extends React.Component<any, any> {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return true
  }

  handeIncrement = () => {
    const { dispatch } = this.props
    dispatch(increment())
  }

  handleDecrement = () => {
    const { dispatch } = this.props
    dispatch(decrement())
  }

  handleIncrementAsync = () => {
    const { dispatch } = this.props
    dispatch(incrementAsync())
  }
  render() {
    console.log(this.props)
    return (
      <div className="saga-test">
        <button onClick={this.handeIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleIncrementAsync}>IncrementAsync</button>
        <div>{this.props.num}</div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    num: state.counter.num
  }
})(Content)
