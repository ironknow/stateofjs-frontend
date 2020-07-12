import React from "react"
import { ResponsiveBar } from "@nivo/bar"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const ChartBar = ({ data, surveyBar }) => (
  <ResponsiveBar
    data={data}
    keys={[
      "would_use",
      "would_not_use",
      "interested",
      "not_interested",
      "never_heard",
    ]}
    indexBy="framework"
    margin={{ top: 80, bottom: 160 }}
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
        color: "black",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[]}
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
      legend: {
        backgroundColor: "pink",
      },
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
    legends={[
      {
        borderWidth: 1,
        borderSize: "solid",
        borderColor: "white",

        dataFrom: "keys",
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateY: 150,
        itemsSpacing: 2,
        itemWidth: 170,
        itemHeight: 60,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        itemTextColor: "white",

        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 0.8,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
)

export default ChartBar
