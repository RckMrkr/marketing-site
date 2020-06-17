import React from 'react';
import logo from '../../../../images/interops-logo-white.svg';
import styles from './top.module.scss';
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import classname from 'classname'
import backgroundImage from '../../../../images/frontpage/top-background.svg'
import Button from '../../../../components/button';
import useTop from './hooks/useTop';
import Img from 'gatsby-image'

export default ({location, topImage, backImage}) => {
  const {mobileMenuIsShown, setMobileMenuIsShown, hero} = useTop()
  return (
    <div className={classname(styles.wrapper, 'has-text-centered', {[styles.isActive]: mobileMenuIsShown})} style={{backgroundImage: `url(${backgroundImage})`}}>
      <nav className={classname('navbar', styles.navbar, {[styles.isActive]: mobileMenuIsShown})} style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className={classname('navbar-brand', styles.navbarBrand)}>
          <Link className="navbar-item" to="/">
            <img src={logo} alt="InterOps" />
          </Link>
          <div className={classname("navbar-burger", "burger", {[styles.isActive]: mobileMenuIsShown}, styles.burger)} onClick={() => setMobileMenuIsShown(!mobileMenuIsShown)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={classname("navbar-menu", {"is-active": mobileMenuIsShown})}>
          <div className={classname("navbar-start", styles.navbarStart)}>
            <div className={classname('navbar-item', styles.navbarItem)}>
              <Link className={classname({[styles.isActive]:location.pathname === "/"})} to="/">Home</Link>
            </div>
            <div className={classname('navbar-item', styles.navbarItem)}>
              <Link className={classname({[styles.isActive]:location.pathname === "/integrations"})} to="/integrations">Integrations</Link>
            </div>
            <div className={classname('navbar-item', styles.navbarItem)}>
              <Link className={classname({[styles.isActive]:location.pathname === "/eloomi-integrations"})} to="/eloomi-integrations">eloomi</Link>
            </div>
            <div className={classname('navbar-item', styles.navbarItem)}>
              <Link className={classname({[styles.isActive]:location.pathname === "/process-optimization"})} to="/process-optimization">Process optimization</Link>
            </div>
            <div className={classname('navbar-item', styles.navbarItem)}>
              <Link className={classname({[styles.isActive]:location.pathname === "/about-interops"})} to="/about-interops">About InterOps</Link>
            </div>
            <div className={classname('navbar-item', styles.navbarItem)}>
              <Button type="warning">Contact</Button>
            </div>
          </div>
        </div>
      </nav>
      <BackgroundImage className={classname(styles.hero, 'container')} {...hero}>
        <div className={styles.text}>
          <h3 className={classname('title', 'is-1', styles.title)}>A strong partner</h3>
          <h5 className={classname('subtitle', 'is-3', styles.subtitle)}>We will help every step of the way</h5>
        </div>
      </BackgroundImage>
    </div>
  )
}

