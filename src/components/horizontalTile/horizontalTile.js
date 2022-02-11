import React from "react"
import classname from "classname"

export default ({ children, isParent }) => {
  return (
    <div className={classname("tile", { "is-parent": isParent })}>
      {children}
    </div>
  )
}
