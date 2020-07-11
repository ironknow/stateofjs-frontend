import React, { useState } from "react"
import { ResponsiveBump } from "@nivo/bump"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const CustomPoint = ({
  x,
  y,
  isActive,
  isInactive,
  size,
  color,
  borderColor,
  borderWidth,
  data,
}) => {
  return (
    <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: "none" }}>
      <rect
        x={size * -0.5}
        y={size * -0.5}
        width={size}
        height={size}
        fill={color}
        stroke={borderColor}
        strokeWidth={borderWidth}
        rx="50%"
      />
      {!isActive && !isInactive && (
        <text textAnchor="middle" y={4} fill={"#e1e1e1"} fontSize="11px">
          {parseInt(data.percentage)}%
        </text>
      )}
      {isActive ? (
        <text textAnchor="middle" y={4} fill={"#e1e1e1"} fontSize="11px">
          {parseInt(data.percentage)}%
        </text>
      ) : null}
    </g>
  )
}

const ChartBump = ({ data }) => {
  return (
    <ResponsiveBump
      data={data}
      margin={{ top: 80, right: 50, bottom: 40, left: 50 }}
      colors={(data) => data.color}
      lineWidth={5}
      xPadding={0.4}
      activeLineWidth={6}
      inactiveLineWidth={5}
      inactiveOpacity={0.15}
      pointComponent={CustomPoint}
      pointSize={35}
      activePointSize={40}
      inactivePointSize={0}
      pointColor="#202424"
      pointBorderWidth={3}
      activePointBorderWidth={4}
      pointBorderColor={{ from: "serie.color" }}
      enableGridY={false}
      startLabel="true"
      startLabelPadding={8}
      endLabelPadding={8}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -36,
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
            strokeWidth: 1,
            strokeDasharray: "1 2",
          },
        },
        tooltip: {
          color: "black",
        },
      }}
    />
  )
}

export default ChartBump
