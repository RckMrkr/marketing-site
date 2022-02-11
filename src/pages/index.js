import React from "react"
import Frontpage from "./../page_components/frontpage"
import SEO from "../components/seo"

export default props => (
  <>
    <SEO title="Home" description="InterOps" />
    <Frontpage {...props} />
  </>
)
