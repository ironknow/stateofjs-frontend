import React from "react"
import {
  StyledChartsLegend,
  StyledShape,
} from "../../elements/StyledChartsLegend"
import { useTranslation } from "react-i18next"

const ChartLegends = ({ setHover }) => {
  const [t] = useTranslation()

  const legends = [
    {
      id: "would_use",
      label: t(`legends.would_use`),
      color: "#FD696A",
    },
    {
      id: "would_not_use",
      label: t(`legends.would_not_use`),
      color: "#FC8E8F",
    },

    {
      id: "interested",
      label: t(`legends.interested`),
      color: "#43C6C7",
    },

    {
      id: "not_interested",
      label: t(`legends.not_interested`),
      color: "#63E0E1",
    },
    {
      id: "never_heard",
      label: t(`legends.never_heard`),
      color: "#BFBFBE",
    },
  ]

  return (
    <StyledChartsLegend>
      {legends.map((legend, index) => {
        return (
          <div
            key={index}
            className="legend"
            onMouseOver={() => {
              setHover(legend.id)
            }}
            onMouseOut={() => {
              setHover(null)
            }}
          >
            <StyledShape color={legend.color} />
            <span className="text">{legend.label}</span>
          </div>
        )
      })}
    </StyledChartsLegend>
  )
}

export default ChartLegends
