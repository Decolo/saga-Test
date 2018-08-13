import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Button } from 'antd';
import MainLayout from './components/mainLayout';
import './style/style.scss';


const Content = () => (
  <div className="content">content</div>
)

class App extends React.Component <any, any>{
  render() {
    return(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);