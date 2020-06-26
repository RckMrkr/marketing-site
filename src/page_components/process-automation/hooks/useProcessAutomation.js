import { graphql, useStaticQuery } from 'gatsby'
import { useState } from 'react'

export default () => {
  const {
    hero,
    screensharing,
    textBackground,
    robot,
  } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "process-automation/ruler.jpg" }) {
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
        screensharing: file(relativePath: { eq: "process-automation/screensharing.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 552) {
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
        robot: file(relativePath: { eq: "process-automation/robot.webp" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 552) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
      }
    `
  )

  const [showExamples, setShowExamples] = useState(false);

  return {
    hero: hero.childImageSharp,
    robot: robot.childImageSharp,
    screensharing: screensharing.childImageSharp,
    textBackground: textBackground.childImageSharp,
    showExamples,
    setShowExamples,
  }
}