import React from 'react';
import classname from 'classname'

export default ({textClasses, children, parentClasses}) => (
  <div className={classname("tile", "is-parent", parentClasses)}>
    <div className={classname('tile', 'is-child', textClasses)}>
      { children }
    </div>
  </div>
)