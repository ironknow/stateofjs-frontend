import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Header from "../components/Header/Header"
import StyledMenuMobile from "../elements/StyledMenuMobile"

const Menu = () => {
  return (
    <Layout>
      <Header />
      <StyledMenuMobile>
        <Link to="/frameworks">
          <div className="title"> Front End Frameworks</div>
        </Link>
      </StyledMenuMobile>
    </Layout>
  )
}

export default Menu
