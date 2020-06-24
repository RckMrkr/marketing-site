import useHeaderMenu from './useHeaderMenu'
import useHeaderImages from './useHeaderImages'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const { mobileMenuIsShown, setMobileMenuIsShown} = useHeaderMenu();
  const { hero } = useHeaderImages();
  
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