import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { hero } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "integration-hero.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return {
    hero: { fluid: hero.childImageSharp.fluid },
  }
}