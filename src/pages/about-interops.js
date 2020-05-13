import React from 'react';
import AboutInterOps from './../page_components/about-interops'
import SEO from '../components/seo'

export default (props) => <>
  <SEO
    title="About InterOps"
    description="We are nerds at heart and we take pride in a work well done. If we believe we cannot deliver a job with sufficient quality, we won't accept it."
  />
  <AboutInterOps {...props} />
</>