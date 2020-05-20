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
    azureLogo,
    dataImage,
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
    },
    isHovered, setIsHovered,
    onVisibilityChange,
    pageIsVisible,
    isHovered,
    dataImage: dataImage.childImageSharp,
  }
}