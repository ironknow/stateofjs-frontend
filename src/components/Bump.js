import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import ChartBump from "../components/charts/ChartBump"
import formatDataBump from "../utils/formatDataBump"
import HeaderGraph from "../components/Header/HeaderGraph"
import StyledBumb from "../elements/StyledBump"

const Bump = () => {
  const [survey, setSurvey] = useState("satisfaction")

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

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  //const rankings = formatDataBump(data.rankings, survey)

  const rankings = formatDataBump(data.rankings, survey)
  console.log(rankings)

  return (
    <>
      <div className="header-graphs">
        <HeaderGraph
          label={"Rankings"}
          surveys={["satisfaction", "awareness", "interest"]}
          setSurvey={setSurvey}
        />
      </div>
      <span className="title-graphs">
        Awareness, interest, and satisfaction ratio rankings.
      </span>
      <StyledBumb>
        <ChartBump data={rankings} />
      </StyledBumb>
    </>
  )
}

export default Bump
