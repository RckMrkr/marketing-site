import React from 'react';
import Price from './../../../../components/price'
import usePricing from './hooks/usePricing';
import classname from 'classname'
import styles from './pricing.module.scss'

export default () => {
  const { prices, setCurrency, currency } = usePricing();
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h2 className="title is-dark is-2">Prices</h2>
        <div>
          <button className={classname("button", styles.button, {[styles.isActive]: currency === 'Euro' })} onClick={() => setCurrency("Euro")}>€</button>
          <button className={classname("button", styles.button, {[styles.isActive]: currency === 'DKK' })} onClick={() => setCurrency("DKK")}>DKK</button>
          <button className={classname("button", styles.button, {[styles.isActive]: currency === 'Dollars' })} onClick={() => setCurrency("Dollars")}>$</button>
        </div>
        <div className="columns">
          <div className="column">
            <h3 className={classname('title', 'is-3', styles.title )}>Migrate</h3>
            <h4 className={classname('subtitle', 'is-4', styles.subtitle)}>
              <Price prices={prices.migration} currency={currency} /> per hour
            </h4>
            <p><b>We can help you get your existing data into eloomi.</b> If you are moving from an existing system this can be very valuable as your emplyees will not have to reenter any data that they have already provided or take in courses they have already taken. We do this as an hourly price, as the difference in data quality across companies varies greatly.</p>
          </div>
          <div className="column">
            <h3 className={classname('title', 'is-3', styles.title )}>Integrate</h3>
            <h4 className={classname('subtitle', 'is-4', styles.subtitle)}>
              <Price prices={prices.integration} currency={currency} /> one time
            </h4>

            <p>If you have a lot of users that you need to keep updated across a lot of different services do not let eloomi become one of them. <b>With an integration, you make sure that data is updated in your main system and the integration make sure that it is updated in eloomi.</b> If you have one of the more common systems that we have implemented with previously (Azure Active Directory, SFTP for example) we already know what it takes and the price is set. For integrations to systems that are more special we will evaluate and give you a price beforehand.</p>
          </div>
          <div className="column">
            <h3 className={classname('title', 'is-3', styles.title )}>Operate and Monitor</h3>
            <h4 className={classname('subtitle', 'is-4', styles.subtitle)}>
              <Price prices={prices.monitoring} currency={currency} /> per year
            </h4>
            <p>The code is done and we just need to make sure that it runs reliably. <b>You can do that if you already have the infrastructure for it, or we at InterOps can do it.</b> If you let us do it we will also monitor the integration in case anything breaks. That could be either something has changed from your systems or something has changed in eloomi's systems. Either way we will let you know. If the change has happened in the eloomi site of things we will, if possible, even fix it for you for no additional cost.</p>
          </div>
        </div>
        <p className="is-italic has-text-weight-bold">Prices in Dollars and Euro are estimates as invoices are sent in DKK</p>
      </div>
    </section>
  )
}