import React from 'react';
import Img from 'gatsby-image'

export default ({imageProps, imageBackground}) => (
  <div className="tile is-parent">
    <div className="tile is-child notification is-flex is-vertical-center is-horizontal-center" style={{backgroundColor: imageBackground}}>
        <Img fadeIn={false} loading="eager" {...imageProps} />
    </div>
  </div>
)