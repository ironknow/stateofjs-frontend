import React from "react"
import { ResponsiveBar } from "@nivo/bar"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const ChartBar = ({ data }) => (
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
    margin={{ top: 80, right: 130, bottom: 50, left: 60 }}
    padding={0.4}
    colors={({ id, data }) => data[`${id}Color`]}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={null}
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
      grid: {
        line: {
          stroke: "var(--grey-light)",
          strokeWidth: 0,
          strokeDasharray: "1 2",
        },
      },
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 140,
        translateY: 40,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
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
