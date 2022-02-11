import React from "react"
import Price from "./../../../../components/price"
import usePricing from "./hooks/usePricing"
import classname from "classname"
import * as styles from "./pricing.module.scss"
import { Element } from "react-scroll"

export default ({ scrollId }) => {
  const { prices, setCurrency, currency } = usePricing()
  return (
    <Element name={scrollId}>
      <section className="section has-background-white">
        <div className="container">
          <h2 className="title is-dark is-2 has-text-centered">Prices</h2>
          <div className="columns has-text-centered">
            <div className="column">
              <div className={styles.buttons}>
                <button
                  className={classname("button", styles.button, {
                    [styles.isActive]: currency === "Euro",
                  })}
                  onClick={() => setCurrency("Euro")}
                >
                  €
                </button>
                <button
                  className={classname("button", styles.button, {
                    [styles.isActive]: currency === "DKK",
                  })}
                  onClick={() => setCurrency("DKK")}
                >
                  DKK
                </button>
                <button
                  className={classname("button", styles.button, {
                    [styles.isActive]: currency === "Dollars",
                  })}
                  onClick={() => setCurrency("Dollars")}
                >
                  $
                </button>
              </div>
            </div>
          </div>
          <div className="columns is-variable is-8 is-medium">
            <div className="column">
              <h3 className={classname("title", "is-3", styles.title)}>
                Migrate
              </h3>
              <h4 className={classname("subtitle", "is-4", styles.subtitle)}>
                <Price prices={prices.migration} currency={currency} /> per hour
              </h4>
              <p>
                Although we prefer to work with a set price, we do migrations as
                an hourly price, as the difference in data quality across
                companies varies greatly.
              </p>
            </div>
            <div className="column">
              <h3 className={classname("title", "is-3", styles.title)}>
                Integrate
              </h3>
              <h4 className={classname("subtitle", "is-4", styles.subtitle)}>
                <Price prices={prices.integration} currency={currency} /> one
                time
              </h4>
              <p>
                If you have one of the more common systems that we have
                implemented with previously (Azure Active Directory, SFTP for
                example) we already know what it takes and the price is set. For
                integrations to systems that are more special we will evaluate
                and give you a price beforehand.
              </p>
            </div>
            <div className="column">
              <h3 className={classname("title", "is-3", styles.title)}>
                Operate and Monitor
              </h3>
              <h4 className={classname("subtitle", "is-4", styles.subtitle)}>
                <Price prices={prices.monitoring} currency={currency} /> per
                year
              </h4>
              <p>
                We will run the integration and notify you have errors. If the
                cause of the error was a change in eloomi's API we will, if
                possible, even fix it for you for no additional cost.
              </p>
            </div>
          </div>
          <p
            className={classname(
              "is-italic has-text-weight-semibold has-text-centered",
              styles.priceCaveat
            )}
          >
            Prices in Dollars and Euro are estimates as invoices are sent in DKK
          </p>
        </div>
      </section>
    </Element>
  )
}
