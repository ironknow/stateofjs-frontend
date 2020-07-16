import React, { useState, useMemo } from "react"
import { gql } from "apollo-boost"
import { Query, useQuery } from "react-apollo"
import formatDataStream from "../utils/formatDataStream"
import HeaderGraph from "../components/Header/HeaderGraph"

const Stream = ({ framework }) => {
  const [survey, setSurvey] = useState("count")
  console.log(framework)
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
  // const experiences = formatDataStream(data.overviews, framework, survey)
  // console.log(experiences)

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

      {/* <StyledBar> */}
      {/* <ChartBar data={overviews} surveyBar={surveyBar} /> */}
      {/* </StyledBar> */}
    </>
  )
}

export default Stream
