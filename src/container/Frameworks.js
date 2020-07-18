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

const Frameworks = () => {
  return (
    <Layout>
      <StyledFrameworks>
        <div className="container">
          <Header />
          <main className="main">
            <Title>Front End Frameworks</Title>
            <Subtitle>Front End Frameworks and librairies.</Subtitle>
            <Bump />
            <Bar />
            <HeatMap />
            <Footer />
          </main>
        </div>
      </StyledFrameworks>
    </Layout>
  )
}

export default Frameworks
