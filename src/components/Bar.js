import React, { useState } from "react"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"
import ChartBar from "../components/charts/ChartBar"
import formatDataBar from "../utils/formatDataBar"
import HeaderGraph from "../components/Header/HeaderGraph"
import StyledBar from "../elements/StyledBar"
const Bar = () => {
  const [surveyBar, setSurveyBar] = useState("count")
  const OVERVIEW_QUERY = gql`
    {
      overviews {
        id
        buckets {
          id
          count
          percentage
        }
      }
    }
  `

  return (
    <Query query={OVERVIEW_QUERY}>
      {({ error, loading, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        const overviews = formatDataBar(data.overviews, surveyBar)

        return (
          <>
            <div className="header-graphs">
              <HeaderGraph
                label={"Category Overview"}
                surveys={["percentage", "count"]}
                setSurvey={setSurveyBar}
              />
            </div>

            <span className="title-graphs">
              Overview of opinions on the technologies surveyed. Darker segments
              represent positive opinions, while lighter segments correspond to
              negative sentiment.
            </span>

            <StyledBar>
              <ChartBar data={overviews} surveyBar={surveyBar} />
            </StyledBar>
          </>
        )
      }}
    </Query>
  )
}

export default Bar
