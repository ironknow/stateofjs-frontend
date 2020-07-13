import React from "react"
import ChartHeatMap from "../components/charts/ChartHeatMap"
import HeaderGraph from "../components/Header/HeaderGraph"
import StyledHeatMap from "../elements/StyledHeatMap"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { formatDataHeatMap } from "../utils/fomatDataHeatMap"

const HeatMap = () => {
  const USAGE_QUERY = gql`
    {
      usages {
        id
        ranges {
          range
          percentage
          count
        }
        total
      }
    }
  `

  const { loading, error, data } = useQuery(USAGE_QUERY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  //const rankings = formatDataBump(data.rankings, survey)
  console.log("heatmat", data)
  const usages = formatDataHeatMap(data.usages)

  console.log(usages)

  return (
    <>
      <div className="header-graphs">
        <HeaderGraph label={"Usage by Years Of Experience"} surveys={[]} />
      </div>
      <span className="title-graphs">
        For each technology, how usage is spread among respondents who picked
        different experience ranges. <br /> Note that the experience in question
        here is general JavaScript experience, not experience with a <br />
        specific technology.
      </span>

      <StyledHeatMap>
        <ChartHeatMap data={usages} />
      </StyledHeatMap>
    </>
  )
}

export default HeatMap
