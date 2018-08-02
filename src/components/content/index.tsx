import * as React from "react";
import {  Switch, Route } from "react-router-dom";
import Azz from './test';

interface HomeState {
  foo: Array<number>
}
class Home extends React.Component <HomeState, any>{
  state = {
    foo: [1, 2]
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps')
  }
  
  public increment = (state, props) => {
    const { foo } = state
    if (foo) {
      return {
        foo: [1, 2]
      }
    }

    return state
  }
  public handleClick = () => {
    // this.setState(this.increment)

    this.setState({
      foo: [1, 2]
    })  
  }

  render() {
    // console.log(this.state)
    const { foo } = this.state
    return (
      <div>
        {/* <Test foo={foo} /> */}
        <Azz />
        <button onClick={this.handleClick}>plus one</button>
      </div>
    )
  }
}
interface TestProps {
  foo: number
}

class Test extends React.Component <any, TestProps>{
  shouldComponentUpdate(nextProps, nextState) {
    
    if (JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      console.log(nextProps.foo === this.props.foo)
      return false
    }
    return true
  }

  render() {
    const { foo } = this.props
    return (
      <div>{foo.toString()}</div>
    )
  }
}

const About = () => {
  return (
    <div>About</div>
  )
}
const Content = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Test />
    </Switch>
  )
}

export default Content