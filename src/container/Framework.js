import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header/Header"
import Description from "../components/Description"
import Stream from "../components/Stream"
import Footer from "../components/Footer"
import StyledFrameworks from "../elements/StyledFrameworks"
import { useParams } from "react-router-dom"

const Framework = () => {
  const { id } = useParams()

  return (
    <Layout>
      <StyledFrameworks>
        <div className="container">
          <Header framework={id} />
          <main className="main">
            <Description id={id} />
            <Stream framework={id === "vue.js" ? "vuejs" : id} />
          </main>
          <Footer />
        </div>
      </StyledFrameworks>
    </Layout>
  )
}

export default Framework
