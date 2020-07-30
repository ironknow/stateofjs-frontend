import React from "react"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"
import PeriodicElement from "../components/PeriodicElement"
import StyledLanding from "../elements/StyledLanding"
import Intro from "../components/Intro"
import Loading from "../components/Loading"
import formatDataLanding from "../utils/formatDataLanding"

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
        if (error) return <div>{error}</div>
        const frameworks = formatDataLanding(data.frameworks)

        return (
          <StyledLanding>
            <div className="periodic-elements">
              {frameworks.map((line, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    {line[index].map(({ stars, symbol, name, _id }, i) => {
                      return (
                        <PeriodicElement
                          key={_id}
                          stars={stars}
                          symbol={symbol}
                          name={name}
                          index={i}
                          line={index}
                        />
                      )
                    })}
                  </div>
                )
              })}
            </div>

            {/* 
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
              })} */}

            <Intro />
          </StyledLanding>
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
