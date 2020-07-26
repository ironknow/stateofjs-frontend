import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo"
import { useTranslation } from "react-i18next"
import formatDataStream from "../utils/formatDataStream"
import HeaderChart from "../components/Header/HeaderChart"
import ChartStream from "./charts/ChartStream"
import StyledStream from "../elements/StyledStream"
import ChartsLegend from "./charts/ChartsLegend"

const Stream = ({ framework }) => {
  const [hover, setHover] = useState(null)
  const [survey, setSurvey] = useState("count")
  const [t] = useTranslation()

  const EXPERIENCES_QUERY = gql`
    query experiences($framework: String!) {
      experiences(id: $framework) {
        id
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

  console.log(survey)
  const { loading, error, data } = useQuery(EXPERIENCES_QUERY, {
    variables: { framework },
  })

  if (loading) return null
  if (error) return `Error! ${error}`

  const experiences = formatDataStream(data.experiences[0].data, survey)
  console.log(experiences)
  return (
    <>
      <div className="header-graphs">
        <HeaderChart
          label={t(`framework.chart.title`)}
          surveys={["percentage", "count"]}
          setSurvey={setSurvey}
        />
      </div>

      <span className="title-graphs">
        {t(`framework.${framework}.description`)}
      </span>

      <StyledStream>
        <ChartStream data={experiences} hover={hover} survey={survey} />
        <ChartsLegend setHover={setHover} />
      </StyledStream>
    </>
  )
}

export default Stream
