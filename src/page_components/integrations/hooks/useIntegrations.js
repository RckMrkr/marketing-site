import { graphql, useStaticQuery } from 'gatsby'
import { useState } from 'react'

export default () => {
  const {
    hero,
    azureActiveDirectoryLogo,
    facebookLogo,
    twilioLogo,
    eloomiLogo,
    unsplashLogo,
    trustpilotLogo,
    ahsayLogo,
    vimeoLogo,
    cloudinaryLogo,
    awsLogo,
    plectoLogo,
    salesLoftLogo,
    azureLogo,
    dataImage,
    screensharing,
    textBackground,
    puzzle,
    atComputer,
  } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "integrations/dashboard.jpg" }) {
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
        dataImage: file(relativePath: { eq: "integrations/data.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 200, 
              duotone: {
                highlight: "#3c4989",
                shadow: "#3c4989",
                opacity: 30
              }) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        azureActiveDirectoryLogo: file(relativePath: { eq: "integrations/logos/azure-active-directory.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        facebookLogo: file(relativePath: { eq: "integrations/logos/facebook.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        twilioLogo: file(relativePath: { eq: "integrations/logos/twilio.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        eloomiLogo: file(relativePath: { eq: "integrations/logos/eloomi.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        unsplashLogo: file(relativePath: { eq: "integrations/logos/unsplash.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        trustpilotLogo: file(relativePath: { eq: "integrations/logos/trustpilot.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        ahsayLogo: file(relativePath: { eq: "integrations/logos/ahsay.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        vimeoLogo: file(relativePath: { eq: "integrations/logos/vimeo.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        cloudinaryLogo: file(relativePath: { eq: "integrations/logos/cloudinary.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        awsLogo: file(relativePath: { eq: "integrations/logos/aws.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        azureLogo: file(relativePath: { eq: "integrations/logos/azure.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        screensharing: file(relativePath: { eq: "process-automation/screensharing.webp" }) {
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
        puzzle: file(relativePath: { eq: "integrations/startae-team-36Aai16fubc-unsplash.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxHeight: 304) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        atComputer: file(relativePath: { eq: "integrations/at-computer.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxHeight: 304) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        plectoLogo: file(relativePath: { eq: "integrations/logos/plecto.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
        salesLoftLogo: file(relativePath: { eq: "integrations/logos/salesLoft.png" }) {
          childImageSharp {
            fixed(height:60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        },
      }
    `
  )

  const [isHovered, setIsHovered] = useState(false);
  const [pageIsVisible, setPageIsVisible] = useState(true);
  const onVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return {
    hero: hero.childImageSharp,
    logos: {
      azureActiveDirectory: azureActiveDirectoryLogo.childImageSharp,
      facebook: facebookLogo.childImageSharp,
      twilio: twilioLogo.childImageSharp,
      eloomi: eloomiLogo.childImageSharp,
      unsplash: unsplashLogo.childImageSharp,
      trustpilot: trustpilotLogo.childImageSharp,
      ahsay: ahsayLogo.childImageSharp,
      vimeo: vimeoLogo.childImageSharp,
      cloudinary: cloudinaryLogo.childImageSharp,
      aws: awsLogo.childImageSharp,
      azure: azureLogo.childImageSharp,
      plecto: plectoLogo.childImageSharp,
      salesLoft: salesLoftLogo.childImageSharp,
    },
    isHovered, setIsHovered,
    onVisibilityChange,
    pageIsVisible,
    dataImage: dataImage.childImageSharp,
    screensharing: screensharing.childImageSharp,
    textBackground: textBackground.childImageSharp,
    puzzle: puzzle.childImageSharp,
    atComputer: atComputer.childImageSharp
  }
}