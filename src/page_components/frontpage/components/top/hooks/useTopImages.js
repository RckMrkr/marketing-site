import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { hero } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "frontpage/hero.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 707) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return {
    hero: hero.childImageSharp
  }
}