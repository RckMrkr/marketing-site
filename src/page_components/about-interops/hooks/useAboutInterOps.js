import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const { hero, middleImage, topImage } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "about-interops/hero.jpg" }) {
          childImageSharp {
            fluid(
              quality: 80
              maxWidth: 707
              duotone: { highlight: "#3c4989", shadow: "#3c4989", opacity: 30 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        middleImage: file(
          relativePath: { eq: "about-interops/code-on-black.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 552) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        topImage: file(
          relativePath: { eq: "about-interops/group-of-people.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 552) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return {
    hero: hero.childImageSharp,
    middleImage: middleImage.childImageSharp,
    topImage: topImage.childImageSharp,
  }
}
