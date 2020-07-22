import React, { useEffect } from "react"
import i18next from "i18next"
import StyledHeader from "../../elements/StyledHeader"
import { Link } from "react-router-dom"
import { useState } from "react"

const Header = ({ framework }) => {
  const [selectedLang, setSelectedLang] = useState("en")
  const langs = Object.keys(i18next.store.data)

  useEffect(() => {
    i18next.changeLanguage(selectedLang)
  }, [selectedLang])

  return (
    <StyledHeader>
      <Link to="/frameworks">
        <div className="section">Front End Frameworks</div>
      </Link>
      <div className="langs">
        {langs &&
          langs.map((lang) => {
            return (
              <span
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={lang === selectedLang ? "lang selected" : "lang"}
              >
                {lang.toUpperCase()}
              </span>
            )
          })}
      </div>
      <div className="title">{framework}</div>
    </StyledHeader>
  )
}

export default Header
