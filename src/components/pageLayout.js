import React from "react"
import Layout from "./layout/layout"
import BackgroundImage from 'gatsby-background-image'

const PageLayout = ({ children, location, hero, title, subtitle }) => {
  console.log(hero)
  return (
    <Layout location={location}>
      <section className="hero is-medium">
        <BackgroundImage
          className="hero-body"
          {...hero}
        >
        <div className="container">
        <h1 className="title is-1 is-white">{ title }</h1>
        <h4 className="subtitle is-3 is-white">{ subtitle }</h4>
        </div>
        </BackgroundImage>
        
      </section>
      { children }
    </Layout>
  )
}

export default PageLayout
