import React from "react"
import Img from "gatsby-image"
import useLogo from "./hooks"
import classname from "classname"
import * as styles from "./logo.module.scss"

export default ({ name, logo }) => {
  const { isHovered, setIsHovered } = useLogo()
  return (
    <div
      className="has-text-centered is-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ padding: "20px 50px" }}
    >
      <div className="is-flex is-vertical-center is-horizontal-center">
        <Img {...logo} />
      </div>
      <div className="is-relative" style={{ height: "20px", width: "auto" }}>
        <h3
          className={classname(styles.logo, "subtitle", {
            "is-invisible": !isHovered,
          })}
        >
          {name}
        </h3>
      </div>
    </div>
  )
}
