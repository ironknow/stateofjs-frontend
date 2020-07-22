import React from "react"
import "./styles/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./i18n"

import Landing from "./container/Landing"
import Frameworks from "./container/Frameworks"
import Framework from "./container/Framework"
import Menu from "./container/Menu"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/frameworks">
          <Frameworks />
        </Route>
        <Route path="/framework/:id">
          <Framework />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
