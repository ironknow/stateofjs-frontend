import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import ChartBump from "../components/charts/ChartBump"
import formatDataBump from "../utils/formatDataBump"
import HeaderChart from "../components/Header/HeaderChart"
import Loading from "../components/Loading"
import StyledBumb from "../elements/StyledBump"
import { useTranslation } from "react-i18next"

const Bump = () => {
  const [survey, setSurvey] = useState("satisfaction")
  const [t] = useTranslation()

  const RANKING_QUERY = gql`
    {
      rankings {
        id
        ${survey} {
          year
          rank
          percentage
        }
      }
    }
  `

  const { loading, error, data } = useQuery(RANKING_QUERY)

  if (loading) return "loading"
  if (error) return `Error! ${error.message}`

  const rankings = formatDataBump(data.rankings, survey)

  return (
    <>
      <div className="header-graphs">
        <HeaderChart
          label={t(`frameworks.bump.header.title`)}
          surveys={["satisfaction", "awareness", "interest"]}
          setSurvey={setSurvey}
        />
      </div>
      <span className="title-graphs">
        {t(`frameworks.bump.chart.description`)}
      </span>
      <StyledBumb>
        <ChartBump data={rankings} />
      </StyledBumb>
    </>
  )
}

export default Bump
