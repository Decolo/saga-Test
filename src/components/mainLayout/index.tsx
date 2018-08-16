import * as React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import './style.scss';
import TopBar from '../topbar';
import LeftNav from '../leftNav';
import Content from '../../container/content/index';
import Bar from '../../container/bar/index';

const About = () => (
  <div className="about">about</div>
)

const Home = () => (
  <div className="home">home</div>
)

class MainLayout extends React.Component<any, any> {
  render() {
    return (     
      <div className="main-layout">
        <TopBar />
        <LeftNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/content" component={Content} />
          <Route path="/bar" component={Bar} />
          <Redirect to="/" />
        </Switch>        
      </div>
    )
  }
}

export default MainLayout


