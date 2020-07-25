import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import ChartBar from "../components/charts/ChartBar"
import formatDataBar from "../utils/formatDataBar"
import HeaderChart from "../components/Header/HeaderChart"
import StyledBar from "../elements/StyledBar"
import Loading from "../components/Loading"
import { useTranslation } from "react-i18next"
import ChartsLegend from "./charts/ChartsLegend"

const Bar = () => {
  const [surveyBar, setSurveyBar] = useState("count")
  const [hover, setHover] = useState(null)
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

  const { loading, error, data } = useQuery(OVERVIEW_QUERY)

  if (loading) return <Loading />
  if (error) return `Error! ${error.message}`
  const overviews = formatDataBar(data.overviews, surveyBar, hover)

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
        <ChartBar data={overviews} surveyBar={surveyBar} hover={hover} />
        <ChartsLegend setHover={setHover} />
      </StyledBar>
    </>
  )
}

export default Bar
