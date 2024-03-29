/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "../footer"
import Header from "./components/header"
import ContactForm from "./../contactForm"

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header {...props} />
      {children}
      <ContactForm from={props.location.pathname} />
      <Footer />
    </>
  )
}

export default Layout
