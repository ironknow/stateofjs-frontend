import React from "react"
import { ResponsiveBar } from "@nivo/bar"

const keys = [
  "would_use",
  "would_not_use",
  "interested",
  "not_interested",
  "never_heard",
]

const ChartBar = ({ data, surveyBar, hover }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy="framework"
      margin={{ top: 80, bottom: 120 }}
      padding={0.6}
      colors={({ id, data }) => data[`${id}Color`]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "black",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#CECCCB",
          rotation: -45,
          lineWidth: 4,
          spacing: 6,
        },
      ]}
      fill={[
        {
          match: {
            id: "never_heard",
          },
          id: !hover || hover === "never_heard" ? "lines" : "null",
          color: "white",
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      tooltip={({ id, value }) => (
        <strong>
          {id}:
          <strong style={{ fontWeight: "bold" }}>
            {Number(value).toLocaleString()}
            {surveyBar === "percentage" && "%"}
          </strong>
        </strong>
      )}
      labelFormat={(value, id, data) =>
        surveyBar === "percentage"
          ? Number(value).toLocaleString() + "%"
          : Number(value).toLocaleString()
      } // 4 stars
      axisLeft={null}
      theme={{
        label: {
          color: "white",
          fontSize: "bold",
        },
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
        grid: {
          line: {
            stroke: "var(--grey-light)",
            strokeWidth: 0,
            strokeDasharray: "1 2",
          },
        },
        tooltip: {
          color: "#1342a7",
          fontSize: "14px",
          boxShadow: "5px 5px rgba(0,0,0,0.2)",
        },
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={"black"}
      legends={[]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}

export default ChartBar
