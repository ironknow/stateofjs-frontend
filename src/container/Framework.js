import React from "react"
import Bump from "../components/Bump"
import Bar from "../components/Bar"
import HeatMap from "../components/HeatMap"
import Layout from "../components/Layout"
import Header from "../components/Header/Header"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import StyledFrameworks from "../elements/StyledFrameworks"
import { useParams } from "react-router-dom"
import { withNamespaces } from "react-i18next"
import i18next from "i18next"
import { useEffect } from "react"

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
          <main className="main">{t("welcome")}</main>
        </div>
      </StyledFrameworks>
    </Layout>
  )
}

export default withNamespaces()(Framework)
