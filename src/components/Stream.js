import React, { useState } from "react"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"

import HeaderGraph from "../components/Header/HeaderGraph"

const Stream = ({ framework }) => {
  const [survey, setSurvey] = useState("count")
  const EXPERIENCES_QUERY = gql`
    {
      experiences {
        data {
          year
          buckets {
            id
            count
            percentage
          }
        }
      }
    }
  `

  return (
    <Query query={EXPERIENCES_QUERY}>
      {({ error, loading, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        console.log("experiences", data.experiences)
        //const experiencex = formatDataBar(data.overviews, surveyBar)
        //console.log(experiences)

        return (
          <>
            <div className="header-graphs">
              <HeaderGraph
                label={"React Experience Over Time"}
                surveys={["percentage", "count"]}
                setSurvey={setSurvey}
              />
            </div>

            <span className="title-graphs">
              Respondent's experience with React.
            </span>

            {/* <StyledBar> */}
            {/* <ChartBar data={overviews} surveyBar={surveyBar} /> */}
            {/* </StyledBar> */}
          </>
        )
      }}
    </Query>
  )
}

export default Stream
