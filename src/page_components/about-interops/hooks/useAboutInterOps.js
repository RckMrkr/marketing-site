import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { hero, divider } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "about-interops/hero.jpg" }) {
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
        divider: file(relativePath: { eq: "about-interops/divider.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 600, 
              duotone: {
                highlight: "#3c4989",
                shadow: "#3c4989",
                opacity: 30
              }) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return {
    hero: hero.childImageSharp,
    divider: divider.childImageSharp,
  }
}