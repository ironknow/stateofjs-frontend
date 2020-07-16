import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header/Header"
import Description from "../components/Description"
import Stream from "../components/Stream"
import StyledFrameworks from "../elements/StyledFrameworks"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import i18next from "i18next"

const Framework = ({ t }) => {
  const { id } = useParams()

  useEffect(() => {
    i18next.changeLanguage("fr")
  }, [])
  return (
    <Layout>
      <StyledFrameworks>
        <div className="container">
          <Header framework={id} />
          <main className="main">
            <Description id={id} />
            <Stream framework={id === "vue.js" ? "vuejs" : id} />
          </main>
        </div>
      </StyledFrameworks>
    </Layout>
  )
}

export default Framework
