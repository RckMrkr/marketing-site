import React from "react"
import classname from "classname"

export default ({ textClasses, children, parentClasses, ...props }) => (
  <div className={classname("tile", "is-parent", parentClasses)} {...props}>
    <div className={classname("tile", "is-child", textClasses)}>{children}</div>
  </div>
)
