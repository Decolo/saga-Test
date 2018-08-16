import * as React from "react";

export default class Test extends React.Component <any, any>{
  componentWillReceiveProps(nextProps) {
    console.log(nextProps === this.props)
  }
  render() {
    return (
      <div>11</div>
    )
  }
}