import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo"
import { useTranslation } from "react-i18next"
import formatDataStream from "../utils/formatDataStream"
import HeaderChart from "../components/Header/HeaderChart"
import ChartStream from "./charts/ChartStream"
import StyledStream from "../elements/StyledStream"

const Stream = ({ framework }) => {
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

  const { loading, error, data } = useQuery(EXPERIENCES_QUERY, {
    variables: { framework },
  })

  if (loading) return null
  if (error) return `Error! ${error}`

  console.log(data)

  // console.log("experiences", data.experiences)
  const experiences = formatDataStream(
    data.experiences[0].data,
    framework,
    survey
  )
  console.log("experiences fomated", experiences)

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
        <ChartStream data={experiences} />
      </StyledStream>
    </>
  )
}

export default Stream
