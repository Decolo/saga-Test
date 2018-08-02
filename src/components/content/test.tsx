import * as React from 'react';

interface Props {
  foo: number
}

interface State {
  foo: number,
  bar: number
}

export default class Test extends React.Component<any, State> {
  state = {
    foo: 1,
    bar: 2
  }
  componentWillReceiveProps(nextProps) {
    // console.log(this.state.foo)
    
    console.log(nextProps !== this.props)
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      let { foo } = this.state
      this.setState({
        foo: ++foo
      })
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState, this.state)
    return true
    // if (JSON.stringify(nextProps) !== JSON.stringify(this.props) ||
    //   JSON.stringify(nextState) !== JSON.stringify(this.state)) {
    //   return true    
    // }
    // return false
  }
  render() {
    // console.log('update')
    return (
      <div className="test">
        <Foo foo={this.state.foo}/>
      </div>
    )
  }
}

class Foo extends React.Component <Props, any>{
  componentWillReceiveProps(nextProps) {
    this.setState({
      foo1: nextProps.foo
    })
    // console.log(this.state.foo)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState, this.props, this.state)
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props) ||
      JSON.stringify(nextState) !== JSON.stringify(this.state)) {
       return true    
    }
    return false
  }
  state = {
    foo1: 1
  }
  render() {
    // console.log('update')
    return (
      <div>{this.state.foo1}</div>
    )
  }
}