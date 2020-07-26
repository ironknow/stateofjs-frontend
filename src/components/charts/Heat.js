import React, { useState, useEffect } from "react"
import { StyledHeat, StyledData, StyledLine } from "../../elements/StyledHeat"

const Heat = ({ data }) => {
  const [hover, setHover] = useState(null)
  const keys = [`<1`, `1~2`, `2~5`, `5~10`, `10~20`, `>20`]
  const defs = [
    { range: 0, color: "#2F575B" },
    { range: 10, color: "#346E71" },
    { range: 20, color: "#398587" },
    { range: 30, color: "#398587" },
    { range: 40, color: "#3EB2B1" },
  ]

  return (
    <StyledHeat>
      <div className="legend">
        <div className="legend title">Years of Experience</div>
        <div className="legend graph">
          {keys.map((key, index) => {
            return (
              <div key={index} className="key">
                {key}
              </div>
            )
          })}
        </div>
      </div>
      <div onMouseLeave={() => setHover(null)}>
        {data.map((line, index) => {
          console.log(line)
          return (
            <div
              key={index}
              onMouseOver={() => {
                setHover(index)
                console.log(index)
              }}
            >
              <StyledLine index={index} hover={hover}>
                <div className="line title">{line.framework}</div>
                <div className="line graph">
                  {keys.map((key, index) => {
                    return (
                      <StyledData
                        key={index}
                        data={line[key]}
                      >{`${line[key]}%`}</StyledData>
                    )
                  })}
                </div>
              </StyledLine>
            </div>
          )
        })}
      </div>
      <div className="def">
        {defs.map(({ range, color }, index) => {
          return (
            <div key={index} className="def item">
              <span>{range}%</span>
              <span
                style={{ backgroundColor: color }}
                className="def color"
              ></span>
            </div>
          )
        })}
      </div>
    </StyledHeat>
  )
}

export default Heat
