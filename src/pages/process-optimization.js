import React from 'react';
import ProcessOptimization from './../page_components/process-optimization'

import SEO from '../components/seo'

export default (props) => <>
  <SEO
    title="Process optimization"
    description="Do you feel like you are spending time doing the same thing over and over? Automate it! It will be quicker and less prone to errors."
  />
  <ProcessOptimization {...props} />
</>