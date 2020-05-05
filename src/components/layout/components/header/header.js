import React from "react"
import { Link } from "gatsby"

const Header = (props) => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </Link>
          <a role="button" className="navbar-burger is-active burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-active">
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
