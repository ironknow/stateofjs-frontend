import React from "react"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"
import PeriodicElement from "../components/PeriodicElement"
import StyledLanding from "../elements/StyledLanding"
import Intro from "../components/Intro"
import Loading from "../components/Loading"

const FRAMEWORKS_QUERY = gql`
  {
    frameworks {
      _id
      stars
      symbol
      name
    }
  }
`
const FrameworksQuery = () => {
  return (
    <Query query={FRAMEWORKS_QUERY}>
      {({ error, loading, data }) => {
        if (loading)
          return (
            <div>
              <Loading />
            </div>
          )
        if (error)
          return (
            <div>
              <div>
                <Loading />
              </div>
            </div>
          )
        const frameworks = data.frameworks

        return (
          <>
            <div className="periodic-elements">
              {frameworks.map(({ stars, symbol, name, _id }, index) => {
                return (
                  <PeriodicElement
                    key={_id}
                    stars={stars}
                    symbol={symbol}
                    name={name}
                    index={index}
                  />
                )
              })}
            </div>
            <Intro />
          </>
        )
      }}
    </Query>
  )
}

const Landing = () => {
  return (
    <StyledLanding>
      <FrameworksQuery />
    </StyledLanding>
  )
}

export default Landing
