import React from "react"
import Layout from "../../components/layout/layout"
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import './index.scss';
import ContactForm from "../../components/contactForm";

const Frontpage = ({ location }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Layout location={location}>
      <section className="hero is-large">
        <BackgroundImage
          className="hero-body"
          fluid={desktop.childImageSharp.fluid}
        >
          <div className="container has-text-centered">
            <h1 className="title">Lets start communicating</h1>
            {/* <h2 className="subtitle">Subtitle 3</h2> */}
          </div>
        </BackgroundImage>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title is-2">Integrations</h2>
              <p className="content">An integration between systems is a way for two, or more systems, to be able to talk together that does not do so on their own</p>
            </div>
            <div className="divider is-vertical">AND</div>
            <div className="column has-text-centered">
              <h2 className="title is-2">Process improvement through technology</h2>
              <p className="content">Some times you cannot find a tool that works for you. We can help. </p>
            </div>
            <div className="divider is-vertical">and</div>
            <div className="column has-text-centered">
              <h2 className="title is-2">Systems</h2>
              <p className="content">You take your choice</p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm isDark from="frontpage" />
    </Layout>
  )
}

export default Frontpage
