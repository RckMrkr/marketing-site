import React from "react"
import Layout from "./layout/layout"
import BackgroundImage from 'gatsby-background-image'

const PageLayout = ({ children, location, hero, title, subtitle }) => {
  return (
    <Layout location={location}>
      <section className="hero is-medium">
        <BackgroundImage
          durationFadeIn={2000}
          className="hero-body"
          {...hero}
        >
        </BackgroundImage>
      </section>
      <section className="section">
        <div className="container">
        <h1 className="title">{ title }</h1>
        <h4 className="subtitle">{ subtitle }</h4>
        </div>
      </section>
      { children }
    </Layout>
  )
}

export default PageLayout
