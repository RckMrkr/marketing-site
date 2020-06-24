import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { hero, eloomiLogo, insights, backImage, frontImage, textBackground } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "eloomi-integrations/eloomi-hero.jpeg" }) {
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
        textBackground: file(relativePath: { eq: "process-automation/text-background.webp" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 552) {
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
        frontImage: file(relativePath: { eq: "eloomi-integrations/write-on-page.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 564) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        backImage: file(relativePath: { eq: "eloomi-integrations/coffee.jpg" }) {
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
    insights: insights.childImageSharp,
    backImage: backImage.childImageSharp,
    frontImage: frontImage.childImageSharp,
    textBackground: textBackground.childImageSharp,
  }
}