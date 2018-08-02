import * as React from "react";
import LeftNav from './leftNav'
import TopBar from './topBar'
import Content from './content'
import { BrowserRouter } from "react-router-dom"
import '../style/style.scss'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="app">
          <TopBar />
          <LeftNav />
          <Content />
        </div>
      </BrowserRouter>
    )
  }
}


export default App