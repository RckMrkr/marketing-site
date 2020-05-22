import React from "react"
import { Link } from "gatsby"
import classname from 'classname'
import useHeader from './hooks'
import Logo from './../../../logo'
import {Link as ScrollLink} from 'react-scroll'

const Header = ({location}) => {
  const { isMenuShown, toggleIsMenuShown, contactElementName } = useHeader(false);

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
            <Link className={classname("navbar-item", {"is-active":location.pathname === "/integrations"})} to="/integrations">Integrations</Link>
            <Link className={classname("navbar-item", {"is-active":location.pathname === "/eloomi-integrations"})} to="/eloomi-integrations">eloomi</Link>
            <Link className={classname("navbar-item", {"is-active":location.pathname === "/process-optimization"})} to="/process-optimization">Process optimization</Link>
            <Link className={classname("navbar-item", {"is-active":location.pathname === "/about-interops"})} to="/about-interops">About InterOps</Link>
            <div className="navbar-item">
              <div className="buttons">
                <ScrollLink className="button is-success" spy smooth to={contactElementName}><strong>Contact</strong></ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header