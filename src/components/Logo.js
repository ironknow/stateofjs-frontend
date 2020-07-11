import React from "react"
import { StyledLogo, StyledLogoElement } from "../elements/StyledLogo"

const Logo = () => {
  const elements = [
    { stars: 1, label: "St", color: "white" },
    { stars: 2, label: "At", color: "white" },
    { stars: 3, label: "E", color: "white" },
    { stars: 0, label: "", color: null },
    { stars: 4, label: "Of", color: "white" },
    { stars: 5, label: "Ja", color: "green" },
    { stars: 6, label: "Va", color: "green" },
    { stars: 7, label: "Sc", color: "green" },
    { stars: 8, label: "Ri", color: "green" },
    { stars: 9, label: "Pt", color: "green" },
    { stars: 0, label: "", color: null },
    { stars: 0, label: "", color: null },
    { stars: 11, label: "20", color: "red" },
    { stars: 12, label: "19", color: "red" },
    { stars: 0, label: "", color: null },
  ]

  return (
    <StyledLogo>
      {elements.map((element, index) => {
        return (
          <div key={index}>
            <StyledLogoElement color={element.color}>
              {element.stars > 0 && (
                <div className="stars">{element.stars}</div>
              )}
              {element.label}
            </StyledLogoElement>
          </div>
        )
      })}
    </StyledLogo>
  )
}

export default Logo
