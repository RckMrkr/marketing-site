import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PageNotFound = ({location}) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>We can't find the page you have entered :(</h1>
  </Layout>
)

export default PageNotFound