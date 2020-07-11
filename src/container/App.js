import React from "react"
import "../styles/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//import Button from "stateofjs-library"

import Landing from "./Landing"
import Frameworks from "./Frameworks"
import Framework from "./Framework"

// const httpLinkUser = createHttpLink({
//   uri: "http://localhost:4000",
// })

//connect AppolloClient with GraphQL Api
//Graphql Server will be running on http://localhost:4000
// const customClient = new ApolloClient({
//   link: httpLinkUser,
//   cache: new InMemoryCache(),
// })

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
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
