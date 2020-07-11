import React from "react"
import StyledLink from "../elements/StyledLink"

const Link = ({ setSurvey, survey }) => {
  console.log("survey", survey)
  return (
    <StyledLink
      onClick={() => {
        setSurvey(survey)
      }}
    >
      {survey}
    </StyledLink>
  )
}

export default Link
