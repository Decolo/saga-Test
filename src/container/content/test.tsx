import * as React from "react";
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';

class Test extends React.Component <any, any>{
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    // console.log(nextProps === this.props)
  }
  render() {
    return (
      <div>11</div>
    )
  }
}

export default connect((state, ownProps) => ({
  ...state, 
  ...ownProps}))(Test)