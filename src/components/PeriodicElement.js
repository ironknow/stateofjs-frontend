import React from "react"
import StyledPeriodicElement from "../elements/StyledPeriodicElement"

const PeriodicElement = ({ stars, symbol, name, index, component }) => {
  return (
    <StyledPeriodicElement index={index} component={component}>
      <div className="stars">{stars}</div>
      <div className="symbol">{symbol}</div>
      <div className="name">{name}</div>
    </StyledPeriodicElement>
  )
}

export default PeriodicElement
