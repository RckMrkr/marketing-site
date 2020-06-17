import React from "react"

import logoLarge from './../images/interops-logo.svg';
import logoMedium from './../images/interops-logo.svg';
import logoSmall from './..//images/interops-logo.svg';

 const imageMapping = {
   small: logoSmall,
   medium: logoMedium,
   large: logoLarge,
 }

const Logo = ({size, ...props}) => <img width="200" {...props} src={imageMapping[size]} alt="InterOps" />

export default Logo