import React from "react"
import StyledAbout from "../elements/StyledAbout"

const About = () => {
  return (
    <StyledAbout>
      <div className="about-title">
        <h2 className="about-title">StateOfJS (Clone) is Made by:</h2>
      </div>
      <div className="about-description">
        <h3 className="author">Lila Guillermic</h3>
        <p className="about-text">
          React web developer, available source code on&nbsp;
          <a className="about-link" href="https://github.com/LilaGuill">
            github
          </a>
          , contact me with&nbsp;
          <a
            className="about-link"
            href="https://www.linkedin.com/in/lila-guillermic-66542476/"
          >
            linkedin
          </a>
          .
          <br />
        </p>
      </div>
    </StyledAbout>
  )
}

export default About
