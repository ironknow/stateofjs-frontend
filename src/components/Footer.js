import React from "react"
import StyledFooter from "../elements/StyledFooter"

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Coded with&nbsp;
        <a className="footer-link" href="https://reactjs.org/">
          React
        </a>
        ,&nbsp;
        <a className="footer-link" href="https://graphql.org/">
          GraphQL
        </a>
        , styled with&nbsp;
        <a className="footer-link" href="https://styled-components.com/">
          Styled-components
        </a>
        , Graph with&nbsp;
        <a className="footer-link" href="https://nivo.rocks/">
          Nivo
        </a>
        .
      </p>
    </StyledFooter>
  )
}

export default Footer
