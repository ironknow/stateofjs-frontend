import React from "react"
import StyledHeader from "../../elements/StyledHeader"
import { Link } from "react-router-dom"

const Header = ({ framework }) => {
  return (
    <StyledHeader>
      <Link to="/frameworks">
        <div className="section">Front End Frameworks</div>
      </Link>
      <div className="lang">Languages</div>
      <div className="title">{framework}</div>
    </StyledHeader>
  )
}

export default Header
