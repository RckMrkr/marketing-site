import useTopMenu from "./useTopMenu"
import useTopImages from "./useTopImages"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const { mobileMenuIsShown, setMobileMenuIsShown } = useTopMenu()
  const { hero } = useTopImages()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contactScrollElementName
          }
        }
      }
    `
  )

  return {
    mobileMenuIsShown,
    setMobileMenuIsShown,
    hero,
    contactElementName: site.siteMetadata.contactScrollElementName,
  }
}
