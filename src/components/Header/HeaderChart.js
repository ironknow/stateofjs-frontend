import React from "react"
import StyledChart from "../../elements/StyledHeaderChart"
import Link from "../Link"

const HeaderChart = ({ label, surveys, setSurvey }) => {
  return (
    <StyledChart>
      <div className="label">{label}</div>

      <div className="links">
        {surveys.map((survey, index) => {
          return <Link key={index} survey={survey} setSurvey={setSurvey}></Link>
        })}
      </div>
    </StyledChart>
  )
}

export default HeaderChart
