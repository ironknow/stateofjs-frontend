import React from "react"
import {
  StyledChartsLegend,
  StyledShape,
} from "../../elements/StyledChartsLegend"

const ChartLegends = ({ setHover }) => {
  const legends = [
    {
      id: "would_use",
      label: `I've USED it before, and would use it again`,
      color: "#FD696A",
    },
    {
      id: "would_not_use",
      label: `I've USED it before, and would NOT use it again`,
      color: "#FC8E8F",
    },

    {
      id: "interested",
      label: `I've HEARD of it, and WOULD like to learn it`,
      color: "#43C6C7",
    },

    {
      id: "not_interested",
      label: `I've HEARD of it, and am NOT interested`,
      color: "#63E0E1",
    },
    {
      id: "never_heard",
      label: `I've never heard of it`,
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
