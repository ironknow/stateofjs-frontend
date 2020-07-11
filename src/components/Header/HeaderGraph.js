import React from "react"
import StyledGraph from "../../elements/StyledHeaderGraph"
import Link from "../../components/Link"

const HeaderGraph = ({ label, surveys, setSurvey }) => {
  return (
    <StyledGraph>
      <div className="label">{label}</div>

      <div className="links">
        {surveys.map((survey, index) => {
          return <Link key={index} survey={survey} setSurvey={setSurvey}></Link>
        })}
      </div>
    </StyledGraph>
  )
}

export default HeaderGraph
