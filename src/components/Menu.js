import React from "react"
import StyledMenu from "../elements/StyledMenu"
import HeaderMenu from "../components/Header/HeaderMenu"
import { Link, useParams } from "react-router-dom"

const Menu = ({ frameworksList }) => {
  const { id } = useParams()
  console.log(id)
  return (
    <StyledMenu>
      <Link to="/">
        <HeaderMenu />
      </Link>
      <div className="container">
        <Link to="/frameworks">
          <div className="title">Front End Frameworks</div>
        </Link>
        {frameworksList &&
          frameworksList.map((framework, index) => {
            return (
              <Link key={index} to={"/framework/" + framework}>
                <li className={framework === id ? "list selected" : "list"}>
                  {framework === id ? ">  " + framework : framework}
                </li>
              </Link>
            )
          })}
      </div>
    </StyledMenu>
  )
}

export default Menu
