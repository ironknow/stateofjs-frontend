import React from "react"
import ReactDOM from "react-dom"
import "./styles/reset.css"
import App from "./App"
import "./i18n"
import * as serviceWorker from "./serviceWorker"
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API,
})

//connect AppolloClient with GraphQL Api
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    dataIdFromObject: (o) => {
      //  console.log(o)
    },
  }),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
