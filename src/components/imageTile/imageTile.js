import React from 'react';
import Img from 'gatsby-image'
import classname from 'classname'

export default ({imageProps, imageBackground, className, ...props}) => (
  <div className={classname('tile', 'is-parent', className)} {...props}>
    <div className="tile is-child notification is-flex is-vertical-center is-horizontal-center is-paddingless" style={{backgroundColor: imageBackground}}>
        <Img fadeIn={false} loading="eager" {...imageProps} />
    </div>
  </div>
)