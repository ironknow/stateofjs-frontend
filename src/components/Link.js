import React from "react"
import StyledLink from "../elements/StyledLink"
import { useTranslation } from "react-i18next"

const Link = ({ setSurvey, survey }) => {
  const [t] = useTranslation()
  return (
    <StyledLink
      onClick={() => {
        setSurvey(survey)
      }}
    >
      {t(`frameworks.link.${survey}`)}
    </StyledLink>
  )
}

export default Link
