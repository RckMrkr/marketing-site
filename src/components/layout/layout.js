/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from '../footer';
import Header from "./components/header"

const Layout = ({ children, location }) => {
  return (
    <>
      <Header location={location} />
      {children}
      <Footer />
    </>
  )
}


export default Layout
