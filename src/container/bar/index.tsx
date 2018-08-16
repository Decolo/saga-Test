import * as React from "react";
import Test from './test';

export default class Bar extends React.Component<any, any> {
  state = {
    bar: 1
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState)
    return true
  }
  
  handleClick = () => {
    let { bar } = this.state
    this.setState({
      bar: ++bar
    })
  }
  render() {
    // console.log(this.state.bar)
    return (
      <div>
        <Test test={1} />
        <button onClick={this.handleClick}>click bar</button>
      </div>
    )
  }
}