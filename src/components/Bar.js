import React, { useState } from "react"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"
import ChartBar from "../components/charts/ChartBar"
import formatDataBar from "../utils/formatDataBar"
import HeaderChart from "../components/Header/HeaderChart"
import StyledBar from "../elements/StyledBar"
import Loading from "../components/Loading"
import { useTranslation } from "react-i18next"

const Bar = () => {
  const [surveyBar, setSurveyBar] = useState("count")
  const [t] = useTranslation()

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
        if (loading)
          return (
            <div>
              <Loading />
            </div>
          )
        if (error) return <div>Error</div>

        const overviews = formatDataBar(data.overviews, surveyBar)

        return (
          <>
            <div className="header-graphs">
              <HeaderChart
                label={t(`frameworks.bar.header.title`)}
                surveys={["percentage", "count"]}
                setSurvey={setSurveyBar}
              />
            </div>

            <span className="title-graphs">
              {t(`frameworks.bar.chart.description`)}
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
