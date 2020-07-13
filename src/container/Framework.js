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

const Framework = () => {
  const { id } = useParams()

  return (
    <Layout>
      <StyledFrameworks>
        <div className="container">
          <Header framework={id} />
          <main className="main"></main>
        </div>
      </StyledFrameworks>
    </Layout>
  )
}

export default Framework
