import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { eloomiPartnershipBackground, whatWeBelieveBackground, eloomiScreenshot } = useStaticQuery(
    graphql`
      query {
        eloomiPartnershipBackground: file(relativePath: { eq: "frontpage/eloomi-partnership-background.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 564) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        whatWeBelieveBackground: file(relativePath: { eq: "frontpage/what-we-believe-background.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 564) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        eloomiScreenshot: file(relativePath: { eq: "frontpage/eloomi-screenshot.png" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 480) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
      }
    `
  )

  return {
    eloomiPartnershipBackground: eloomiPartnershipBackground.childImageSharp,
    whatWeBelieveBackground: whatWeBelieveBackground.childImageSharp,
    eloomiScreenshot: eloomiScreenshot.childImageSharp,
  }
}