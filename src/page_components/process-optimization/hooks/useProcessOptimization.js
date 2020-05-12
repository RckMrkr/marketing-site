import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { hero } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "process-optimization/ruler.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
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