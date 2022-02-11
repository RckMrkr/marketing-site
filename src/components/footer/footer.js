import React from "react"
import logo from "../../images/interops-logo.svg"
import * as styles from "./footer.module.scss"
// import classname from 'classname'

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className="is-hidden-touch">CVR: 34560161</div>
          <div className="has-text-weight-semibold">InterOps</div>
          <div className="is-hidden-desktop">CVR: 34560161</div>
        </div>
        <div className={styles.center}>
          <div>
            <img src={logo} alt="InterOps" />
          </div>
        </div>
        <div className={styles.right}>
          <div>+45 6130 5922</div>
          <div>
            <a href="mailto:contact@interops.io" target="_blank">
              contact@interops.io
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
