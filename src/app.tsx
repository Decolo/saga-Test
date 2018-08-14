import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import { Button } from 'antd';
import reducers from './reducers';
import MainLayout from './components/mainLayout';
import './style/style.scss';

const store = createStore(reducers);

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
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);