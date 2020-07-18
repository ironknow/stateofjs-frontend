import React from "react"
import { ResponsiveStream } from "@nivo/stream"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const datanew = [
  {
    interested: 3619,
    never_heard: 55,
    not_interested: 1184,
    would_not_use: 403,
    would_use: 4996,
  },
  {
    interested: 6362,
    never_heard: 82,
    not_interested: 2575,
    would_not_use: 1020,
    would_use: 13760,
  },
  {
    interested: 3856,
    never_heard: 28,
    not_interested: 1858,
    would_not_use: 1355,
    would_use: 13057,
  },
  {
    interested: 2040,
    never_heard: 9,
    not_interested: 1554,
    would_not_use: 1717,
    would_use: 14382,
  },
]

const keysnew = [
  "interested",
  "never_heard",
  "not_interested",
  "would_not_use",
  "would_use",
]

const keys = ["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]
const data = [
  {
    Raoul: 199,
    Josiane: 196,
    Marcel: 180,
    René: 170,
    Paul: 189,
    Jacques: 190,
  },
  {
    Raoul: 50,
    Josiane: 158,
    Marcel: 64,
    René: 84,
    Paul: 55,
    Jacques: 72,
  },
  {
    Raoul: 116,
    Josiane: 81,
    Marcel: 51,
    René: 174,
    Paul: 151,
    Jacques: 30,
  },
  {
    Raoul: 84,
    Josiane: 135,
    Marcel: 190,
    René: 77,
    Paul: 31,
    Jacques: 88,
  },
]

const ChartStream = (/* see data tab */ { data }) => (
  <ResponsiveStream
    data={datanew}
    keys={keysnew}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    axisTop={{
      orient: "top",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: 36,
    }}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: 36,
    }}
    axisLeft={null}
    offsetType="expand"
    order="reverse"
    curve="linear"
    colors={({ index }) => {
      return index === 0
        ? "#43C6C7"
        : index === 1
        ? "#63E0E1"
        : index === 2
        ? "#63E0E1"
        : index === 3
        ? "#FC8E8F"
        : "#FD696A"
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
          id: "Paul",
        },
        id: "dots",
      },
      {
        match: {
          id: "Marcel",
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
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        translateX: 100,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
            },
          },
        ],
      },
    ]}
  />
)

export default ChartStream
