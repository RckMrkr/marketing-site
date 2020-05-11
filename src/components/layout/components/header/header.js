import React from "react"
import { Link } from "gatsby"
import classname from 'classname'
import useHeader from './hooks'
import Logo from './../../../logo'

const Header = (props) => {
  const { isMenuShown, toggleIsMenuShown } = useHeader(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Logo size='medium' className='logo-medium' />
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
                <Link className="button is-success" to="/contact"><strong>Contact</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
