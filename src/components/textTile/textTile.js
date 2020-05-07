import React from 'react';
import classname from 'classname'

export default ({textClasses, children}) => (
  <div className="tile is-parent">
    <div className={classname('tile', 'is-child', textClasses)}>
      { children }
    </div>
  </div>
)