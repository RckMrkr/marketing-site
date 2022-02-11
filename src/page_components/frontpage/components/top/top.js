import React from "react"
import logo from "../../../../images/interops-logo-white.svg"
import * as styles from "./top.module.scss"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import classname from "classname"
import Button from "../../../../components/button"
import useTop from "./hooks/useTop"
import { Link as ScrollLink } from "react-scroll"

export default ({ location }) => {
  const { mobileMenuIsShown, setMobileMenuIsShown, hero, contactElementName } =
    useTop()
  return (
    <div
      className={classname(styles.wrapper, "has-text-centered", {
        [styles.isActive]: mobileMenuIsShown,
      })}
    >
      <div
        className={classname(styles.background, {
          [styles.isActive]: mobileMenuIsShown,
        })}
      ></div>
      <nav
        className={classname("navbar", styles.navbar, {
          [styles.isActive]: mobileMenuIsShown,
        })}
      >
        <div className={classname("navbar-brand", styles.navbarBrand)}>
          <Link className="navbar-item" to="/">
            <img src={logo} alt="InterOps" />
          </Link>
          <div
            className={classname(
              "navbar-burger",
              "burger",
              { [styles.isActive]: mobileMenuIsShown },
              styles.burger
            )}
            onClick={() => setMobileMenuIsShown(!mobileMenuIsShown)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={classname("navbar-menu", {
            "is-active": mobileMenuIsShown,
          })}
        >
          <div className={classname("navbar-start", styles.navbarStart)}>
            <div className={classname("navbar-item", styles.navbarItem)}>
              <Link
                className={classname({
                  [styles.isActive]: location.pathname === "/",
                })}
                to="/"
              >
                Home
              </Link>
            </div>
            <div className={classname("navbar-item", styles.navbarItem)}>
              <Link
                className={classname({
                  [styles.isActive]: location.pathname === "/integrations",
                })}
                to="/integrations"
              >
                Integrations
              </Link>
            </div>
            <div className={classname("navbar-item", styles.navbarItem)}>
              <Link
                className={classname({
                  [styles.isActive]:
                    location.pathname === "/eloomi-integrations",
                })}
                to="/eloomi-integrations"
              >
                eloomi
              </Link>
            </div>
            <div className={classname("navbar-item", styles.navbarItem)}>
              <Link
                className={classname({
                  [styles.isActive]:
                    location.pathname === "/process-automation",
                })}
                to="/process-automation"
              >
                Process automation
              </Link>
            </div>
            <div className={classname("navbar-item", styles.navbarItem)}>
              <Link
                className={classname({
                  [styles.isActive]: location.pathname === "/about-interops",
                })}
                to="/about-interops"
              >
                About InterOps
              </Link>
            </div>
            <div className={classname("navbar-item", styles.navbarItem)}>
              <ScrollLink
                className={styles.button}
                onClick={() => setMobileMenuIsShown(false)}
                spy
                smooth
                to={contactElementName}
              >
                <Button type="warning">Contact</Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </nav>
      <BackgroundImage
        className={classname(styles.hero, "container")}
        {...hero}
      >
        <div className={styles.text}>
          <h3 className={classname("title", "is-1", styles.title)}>
            A strong partner
          </h3>
          <h5 className={classname("subtitle", "is-3", styles.subtitle)}>
            We will help every step of the way
          </h5>
        </div>
      </BackgroundImage>
    </div>
  )
}
