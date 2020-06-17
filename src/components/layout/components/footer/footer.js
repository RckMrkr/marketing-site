import React from "react"
import logo from '../../../../images/interops-logo.svg'
import styles from './footer.module.css'

const Image = () => {
  return <div className="footer has-text-centered">
    <img src={logo} alt='InterOps' className={styles.footer} />
  </div>
}

export default Image