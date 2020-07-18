import React from "react"
import StyledHeader from "../../elements/StyledHeader"
import { Link } from "react-router-dom"

const Header = ({ framework }) => {
  return (
    <StyledHeader>
      <Link to="/frameworks">
        <div className="section">Front End Frameworks</div>
      </Link>
      <div className="langs">
        <span className="lang">EN</span>
        <span className="lang">-</span>
        <span className="lang">FR</span>
      </div>
      <div className="title">{framework}</div>
    </StyledHeader>
  )
}

export default Header
