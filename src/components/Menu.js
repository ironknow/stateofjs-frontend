import React from "react"
import StyledMenu from "../elements/StyledMenu"
import HeaderMenu from "../components/Header/HeaderMenu"

const Menu = ({ frameworksList }) => {
  return (
    <StyledMenu>
      <HeaderMenu />
      <div className="container">
        <div className="title">Front End Frameworks</div>
        {frameworksList &&
          frameworksList.map((framework, index) => {
            return (
              <li key={index} className="list">
                {framework}
              </li>
            )
          })}
      </div>
    </StyledMenu>
  )
}

export default Menu
