import React from "react"
import { Link } from "gatsby"
import classname from 'classname'
import useHeader from './hooks'

const Header = (props) => {
  const { isMenuShown, toggleIsMenuShown } = useHeader(false);

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img alt="InterOps" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </Link>
          <button onClick={toggleIsMenuShown} className={classname("navbar-burger", "burger", {"is-active": isMenuShown})} aria-label="menu" aria-expanded={isMenuShown ? "true": "false"} data-target="navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbar" className={classname("navbar-menu", {"is-active": isMenuShown})}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/integrations">Integrations</Link>
            <Link className="navbar-item" to="/eloomi-integrations">eloomi</Link>
            <Link className="navbar-item" to="/process-optimization">Process optimization</Link>
            <Link className="navbar-item" to="/about-interops">About</Link>
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-light" to="/contact"><strong>Contact</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
