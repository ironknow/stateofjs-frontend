import React from "react"
import { ResponsiveStream } from "@nivo/stream"

const keys = [
  "interested",
  "never_heard",
  "not_interested",
  "would_not_use",
  "would_use",
]

const ChartStream = ({ data, survey, hover }) => {
  const renderDot = ({ x, y, size, data }) => {
    console.log(survey)
    if (
      (survey === "count" && data.value > 1000) ||
      (survey === "percentage" && data.value > 5)
    ) {
      return (
        <g
          transform={`translate(${x}, ${y})`}
          style={{ pointerEvents: "none" }}
        >
          <rect
            x={size * -3}
            y={size * -0.5}
            width={50}
            height={20}
            fill={"rgba(255,255,255,0.8)"}
          />
          <text
            fontWeight="bold"
            textAnchor="middle"
            x={size - 5}
            y={size + 1}
            fill={"black"}
            fontSize="11px"
          >
            {Number(data.value).toLocaleString()}
            {survey === "percentage" && "%"}
          </text>
        </g>
      )
    }
  }

  return (
    <ResponsiveStream
      data={data}
      keys={keys}
      enableDots={true}
      //dotSize={50}
      renderDot={renderDot}
      margin={{ top: 50, right: 60, bottom: 150, left: 60 }}
      axisTop={{
        orient: "top",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
        format: (year) => {
          return year === 0
            ? 2016
            : year === 1
            ? 2017
            : year === 2
            ? 2018
            : 2019
        },
      }}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
        format: (year) => {
          return year === 0
            ? 2016
            : year === 1
            ? 2017
            : year === 2
            ? 2018
            : 2019
        },
      }}
      axisLeft={null}
      offsetType="expand"
      order="reverse"
      curve="linear"
      colors={({ index }) => {
        if (
          (index === 0 && hover === "interested") ||
          (index === 0 && !hover)
        ) {
          return "#43C6C7"
        } else if (
          (index === 1 && hover === "never_heard") ||
          (index === 1 && !hover)
        ) {
          return "#BFBFBE"
        } else if (
          (index === 2 && hover === "not_interested") ||
          (index === 2 && !hover)
        ) {
          return "#63E0E1"
        } else if (
          (index === 3 && hover === "would_not_use") ||
          (index === 3 && !hover)
        ) {
          return "#FC8E8F"
        } else if (
          (index === 4 && hover === "would_use") ||
          (index === 4 && !hover)
        ) {
          return "#FD696A"
        } else {
          return "#2C2D33"
        }
      }}
      fillOpacity={1}
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: "transparent",
            },
            text: {
              fill: "var(--white)",
              fontSize: "12px",
            },
          },
        },
        tooltip: {
          width: 350,
          color: "#1342a7",
          fontSize: "14px",
          boxShadow: "5px 5px rgba(0,0,0,0.2)",
        },
      }}
      borderColor={{ theme: "background" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#2c998f",
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: "squares",
          type: "patternSquares",
          background: "inherit",
          color: "#e4c912",
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: {
            id: "",
          },
          id: "dots",
        },
        {
          match: {
            id: "",
          },
          id: "squares",
        },
      ]}
      dotSize={8}
      dotColor={{ from: "color" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[]}
    />
  )
}

export default ChartStream
