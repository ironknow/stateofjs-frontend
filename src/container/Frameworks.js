import React from "react"
import Bump from "../components/Bump"
import Bar from "../components/Bar"
import HeatMap from "../components/HeatMap"
import Layout from "../components/Layout"
import Header from "../components/Header/Header"
import Footer from "../components/Footer"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import StyledFrameworks from "../elements/StyledFrameworks"
import { useTranslation } from "react-i18next"

const Frameworks = () => {
  const [t] = useTranslation()

  return (
    <Layout>
      <StyledFrameworks>
        <div className="container">
          <Header />
          <main className="main">
            <Title>{t("frameworks.title")}</Title>
            <Subtitle>{t("frameworks.subtitle")}</Subtitle>
            <Bump />
            <Bar />
            <HeatMap />
          </main>
          <Footer />
        </div>
      </StyledFrameworks>
    </Layout>
  )
}

export default Frameworks
