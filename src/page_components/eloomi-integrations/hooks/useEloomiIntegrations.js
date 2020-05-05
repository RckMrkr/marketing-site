import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { hero, eloomiLogo } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "integration-hero.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        eloomiLogo: file(relativePath: { eq: "eloomi-logo.png" }) {
          childImageSharp {
            fixed(width: 240, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return {
    hero: {fluid: hero.childImageSharp.fluid },
    eloomiLogo: { fixed: eloomiLogo.childImageSharp.fixed }
  }
}