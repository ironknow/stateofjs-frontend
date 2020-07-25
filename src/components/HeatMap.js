import React from "react"
import HeaderChart from "../components/Header/HeaderChart"
import StyledHeatMap from "../elements/StyledHeatMap"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { formatDataHeatMap } from "../utils/fomatDataHeatMap"
import { useTranslation } from "react-i18next"
import Heat from "./charts/Heat"

const HeatMap = () => {
  const [t] = useTranslation()

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

  const usages = formatDataHeatMap(data.usages)

  return (
    <>
      <div className="header-graphs">
        <HeaderChart
          label={t(`frameworks.heatmap.header.title`)}
          surveys={[]}
        />
      </div>
      <span className="title-graphs">
        {t(`frameworks.heatmap.chart.description`)}
      </span>

      <StyledHeatMap>
        <Heat data={usages} />
      </StyledHeatMap>
    </>
  )
}

export default HeatMap
