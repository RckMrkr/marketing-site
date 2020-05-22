import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { hero, eloomiLogo, insights } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "integration-hero.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 707, 
              duotone: {
                highlight: "#3c4989",
                shadow: "#3c4989",
                opacity: 30
              }) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        eloomiLogo: file(relativePath: { eq: "eloomi-logo.png" }) {
          childImageSharp {
            fixed(width: 240, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        insights: file(relativePath: { eq: "eloomi-integrations/eloomi-performance.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 564) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
      }
    `
  )

  return {
    hero: hero.childImageSharp,
    eloomiLogo: eloomiLogo.childImageSharp,
    insights: insights.childImageSharp
  }
}