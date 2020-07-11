import React from "react"
import Menu from "./Menu"
import StyledLayout from "../elements/StyledLayout"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

const Layout = ({ children }) => {
  const RANKING_QUERY = gql`
    {
      rankings {
        id
      }
    }
  `

  const { loading, error, data } = useQuery(RANKING_QUERY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const frameworksList = data.rankings.reduce((acc, val) => {
    return [...acc, val.id]
  }, [])

  return (
    <StyledLayout>
      <Menu frameworksList={frameworksList} />
      {children}
    </StyledLayout>
  )
}

export default Layout
