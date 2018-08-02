import * as React from "react";
import * as ReactDOM from "react-dom";
import App  from "./components/App";
import './style/style.scss';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <App />,
  document.getElementById("app")
);