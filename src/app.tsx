import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import { Button } from 'antd';
import rootSaga  from './saga';
import reducers from './reducers';
import MainLayout from './components/mainLayout';
import './style/style.scss';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

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