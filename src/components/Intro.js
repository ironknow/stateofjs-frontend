import React from "react"
import StyledIntro from "../elements/StyledIntro"
import Logo from "../components/Logo"
import About from "../components/About"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <StyledIntro>
      <Logo />
      <div className="description">
        <div className="description-header">
          <div className="description-header-square">T</div>
          <div className="description-header-title">
            he JavaScript world could use a bit of classification.
          </div>
        </div>
        <div className="description-content">
          <p>
            In 2019 this survey helped us do just that, by collecting data from
            over 20,000 developers to identify current and upcoming trends.
            <br />
            <br />
            Check out our results to find out which libraries developers want to
            learn next, which have the best satisfaction ratings, and much more.
          </p>
        </div>
        <Link to="/frameworks">
          <div className="view-results">View Result</div>
        </Link>
      </div>
      <About />
      <Footer />
    </StyledIntro>
  )
}

export default Intro
