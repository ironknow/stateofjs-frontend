import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo"
import formatDataStream from "../utils/formatDataStream"
import HeaderGraph from "../components/Header/HeaderGraph"
import ChartStream from "./charts/ChartStream"
import StyledStream from "../elements/StyledStream"

const Stream = ({ framework }) => {
  const [survey, setSurvey] = useState("count")

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
        <HeaderGraph
          label={"React Experience Over Time"}
          surveys={["percentage", "count"]}
          setSurvey={setSurvey}
        />
      </div>

      <span className="title-graphs">Respondent's experience with React.</span>

      <StyledStream>
        <ChartStream data={experiences} />
      </StyledStream>
    </>
  )
}

export default Stream
