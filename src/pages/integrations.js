import React from "react"
import Integrations from "./../page_components/integrations"
import SEO from "../components/seo"

export default props => (
  <>
    <SEO
      title="System integrations"
      description="If you either copy data or a computed version of the data from one system to another odds are you can benefit from an integration."
    />
    <Integrations {...props} />
  </>
)
