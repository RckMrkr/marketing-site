import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { frontImage, backImage, site } = useStaticQuery(
    graphql`
      query {
        frontImage: file(relativePath: { eq: "frontpage/front-image.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 460) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        backImage: file(relativePath: { eq: "frontpage/back-image.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 480) {
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
        },
        site {
          siteMetadata {
            contactScrollElementName
          }
        },
      }
    `
  )

  return {
    backImage: backImage.childImageSharp,
    frontImage: frontImage.childImageSharp,
    contactElementName: site.siteMetadata.contactScrollElementName,
  }
}