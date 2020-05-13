import { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default (defaultMenuState) => {
  const [isMenuShown, setIsMenuShown] = useState(defaultMenuState);
  const toggleIsMenuShown = () => setIsMenuShown(!isMenuShown);

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

  return { isMenuShown, toggleIsMenuShown, contactElementName: site.siteMetadata.contactScrollElementName}
}