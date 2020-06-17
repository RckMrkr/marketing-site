import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { frontImage, backImage } = useStaticQuery(
    graphql`
      query {
        frontImage: file(relativePath: { eq: "frontpage/front-image.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 707) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        backImage: file(relativePath: { eq: "frontpage/back-image.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 707) {
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
      }
    `
  )

  return {
    backImage: backImage.childImageSharp,
    frontImage: frontImage.childImageSharp,
  }
}