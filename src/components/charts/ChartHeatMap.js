import React, { useState } from "react"

import { ResponsiveHeatMap } from "@nivo/heatmap"
import { setNestedObjectValues } from "formik"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const ChartHeatMap = ({ data /* see data tab */, keys }) => {
  const [opacity, setOpacity] = useState(1)

  return (
    <ResponsiveHeatMap
      data={data}
      cellShape={({
        data,
        value,
        x,
        y,
        width,
        height,
        color,
        opacity,
        borderWidth,
        borderColor,
        enableLabel,
        textColor,
        onHover,
        onLeave,
        onClick,
        theme,
      }) => {
        return (
          <g
            transform={`translate(${x}, ${y})`}
            onMouseEnter={onHover}
            onMouseMove={(data) => {
              setOpacity(0.2)
            }}
            onMouseLeave={onLeave}
            onClick={(data, e) => {
              console.log(data, e)
            }}
            style={{ cursor: "pointer" }}
          >
            // Your custom SVG elements goes here
            {enableLabel && (
              <>
                <rect
                  x={-5}
                  y={-15}
                  width={150}
                  height={50}
                  fill={
                    value < 1
                      ? "#2F555A"
                      : (value >= 1) & (value < 10)
                      ? "#336B6F"
                      : (value >= 10) & (value < 20)
                      ? "#368385"
                      : (value >= 20) & (value < 30)
                      ? "#368385"
                      : "#3CB1B2"
                  }
                  fill0pacity={1}
                  strokeWidth={0}
                  stroke={"#909191"}
                  strokeOpacity={1}
                  opacity={opacity}
                ></rect>
                <text
                  width={150}
                  // alignmentBaseline="central"
                  // textAnchor="middle"
                  style={{
                    //...theme.labels.text,
                    width: 150,
                    height: 50,
                    stroke: "black",
                  }}
                  fillOpacity={opacity}
                >
                  {Number(value).toLocaleString()}
                </text>
              </>
            )}
          </g>
        )
      }}
      keys={[`<1`, `1~2`, `2~5`, `5~10`, `10~20`, `>20`]}
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
              fontSize: "14px",
            },
          },
        },
        grid: {
          line: {
            stroke: "var(--grey-light)",
            strokeWidth: 0,
            strokeDasharray: "1 2",
          },
          width: 150,
          height: 50,
        },
        tooltip: {
          display: "none",
        },
      }}
      indexBy="framework"
      margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
      forceSquare={true}
      axisTop={{
        orient: "top",
        tickSize: 5,
        tickPadding: 5,
        legend: "",
      }}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        orient: "left",
        tickSize: 10,
        tickPadding: 200,
      }}
      cellOpacity={1}
      cellBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.8]] }}
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(0, 0, 0, 0.1)",
          rotation: -45,
          lineWidth: 4,
          spacing: 7,
        },
      ]}
      fill={[{ id: "lines" }]}
      animate={true}
      motionStiffness={80}
      motionDamping={9}
      hoverTarget="cell"
      cellHoverOthersOpacity={0.25}
    />
  )
}

export default ChartHeatMap
