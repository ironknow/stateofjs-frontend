import React from "react"
import { useTranslation } from "react-i18next"
import StyledDescription from "../elements/StyledDescription"

const Description = ({ id }) => {
  const [t] = useTranslation()

  return (
    <StyledDescription>
      <div className="element">
        <div className="symbol">{t(`framework.${id}.symbol`)}</div>
        <div className="name">{id}</div>
      </div>

      <div className="description">
        <div className="description-title">{id}</div>

        <div className="description-text">
          {t(`framework.${id}.description`)}
        </div>
        <div className="links">
          <a
            className="link"
            href={t(`framework.${id}.homepage`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(`frameworks.link.homepage`)}
          </a>
          <a
            className="link"
            href={t(`framework.${id}.github`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </StyledDescription>
  )
}

export default Description
