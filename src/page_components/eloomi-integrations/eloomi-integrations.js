import React from "react"
import PageLayout from "../../components/pageLayout"
import useEloomiIntegrations from './hooks';
import DoubleTile from '../../components/doubleTile'
import styles from './eloomi-integrations.module.css';

const EloomiIntegrations = ({ location }) => {
  const { hero, eloomiLogo } = useEloomiIntegrations();
  return (
    <PageLayout location={location} hero={hero} title='eloomi intergrations and monitoring' subtitle='InterOps is the official integration partner for eloomi'>
      <section className="section">
        <div className="container">
          <DoubleTile textClasses={['notification', 'is-primary', styles.isPadded, 'is-size-4']} imageProps={eloomiLogo} imageBackground='#0030c0'>
            <p>InterOps is the official integration partner for eloomi. That that is not something that happens by chance.</p>
          </DoubleTile>
          <DoubleTile reverse textClasses={['notification', 'is-primary']} imageProps={eloomiLogo} imageBackground='#0030c0'>
            <p style={{marginBottom: '20px'}}>We have not only built a lot of integrations to eloomi already, we also know what you are talking about when you mention eloomi specific words such as users, budgets, courses or skills. You do not need to spend your time teaching us. You can use your time better than that.</p>
            <p>Besides intricate knowledge of the system, we also have the process down to a science. The overall steps can be found below.</p>
            <p>At InterOps we are also able to host the integration, meaning that you will not have to find a server or an IT guy to figure out how and where the actual code should run. We can take care of that part too. If you prefer to have it in house, we can make sure to handover the code to your IT department, so they are in a good state to keep it running.</p>
          </DoubleTile>
        </div>
      </section>
    </PageLayout>
  )
}

export default EloomiIntegrations
