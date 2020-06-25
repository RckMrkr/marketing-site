import React from "react"
import Layout from "../../components/layout"
import useEloomiIntegrations from './hooks';
import Pricing from './components/pricing';
import SideBySide from './../../components/side-by-side'
import {Link as ScrollLink} from 'react-scroll'
import classname from 'classname';
import Img from 'gatsby-image';
import styles from './eloomi-integrations.module.scss';

const slides = [
  { title: 'Identify internal stakeholders', description: 'First meeting we start by identifying any potential outside dependencies. People outside usually have their own priorities and their own schedule, so we need to identify them quickly, so we can get on their radar as early as possible.'},
  { title: 'Receive API credentials and access to test platform', description: 'We get the API credentials from eloomi, along with a platform on which to test. Then we can start creating the basic setup.'},
  { title: 'Identify how to receive/extract data from existing system', description: 'We have a meeting with a person from your company that has knowledge about IT in order to get to know how to extract data from the system. Contact information is provided for these people in case of questions.'},
  { title: 'Discuss and decide on data to be transferred to eloomi', description: 'We have a meeting, along with eloomi, so we can find the best solution for how you want to use eloomi and what data we are able to extract from your own systems.'},
  { title: 'Integration', description: 'We create the integration as per the solution we agreed on'},
  { title: 'Acceptance test', description: 'You will test the integration to see whether it matches your expectations.'},
  { title: 'Migration to production', description: 'We will move from the test platform to the production platform.'},
  { title: 'Monitoring and maintenance', description: 'Your integration is running in production and needs to be monitored and maintained. We can help out with that.'},
];

const EloomiIntegrations = ({ location }) => {
  const { hero, insights, frontImage, backImage, textBackground } = useEloomiIntegrations();
  const pricingElementId = 'fdsafdsad'
  return (
    <Layout location={location} hero={hero} title='eloomi' subtitle='InterOps is the official integration partner for eloomi'>
      <section className={classname("section is-small", styles.section)}>
        <div className="container">
          <div className={classname('columns', styles.columns)}>
            <div className={classname("column", styles.column)}>
              <Img {...insights} />
            </div>
            <div className={classname("column", styles.column, styles.right)}>
              <h3 className="title is-3">The eloomi partner</h3>
              <p>At InterOps we have spent a lot of time in the eloomi platform and with the APIs that eloomi provide. We will be able to steer you through the process and deliver an integration you can trust. We know it and eloomi knows it. As the official integration partner for eloomi we have a great relationship with eloomi. We leverage this to deliver an even better experience for our customers.</p>
            </div>
          </div>
        </div>
      <SideBySide
        frontImage={frontImage}
        backImage={backImage}
        firstTitle="Migration"
        firstText={<span>We can help you get your existing data into eloomi. No matter whether it is migration of users, courses or goals, as long as we can get the data from the old system, we can load it into eloomi. This can be very valuable as it saves a lot of time for you and your colleagues to do other things. For example planning the launch of your new platform. In addition, by doing this transfer programatically, you ensure that there are no errors caused by typos or other human errors.</span>}
        secondTitle="Integration"
        secondText={<span>If you have a lot of users that you need to keep updated across a lot of different services, do not let eloomi become one of them. With an integration, you make sure that data is updated in your main system and the integration make sure that it is updated in eloomi. That way you are sure that users get access what they need in the system and the right time and that their access get revoked when they are no longer permitted access.</span>}
        thirdTitle="Monitoring"
        thirdText={<span>Once the code has been made for the integration InterOps can operate and monitor the execution of the integration. That means you do not have to worry about servers, errors or potential changes in the eloomi API. If any changes happen on eloomi's side, we will make sure that your integration continues to work flawlessly.</span>}
        thirdOffer={<ScrollLink spy smooth to={pricingElementId}>See the prices &#8594;</ScrollLink>}
      />
      {/* <div className={classname("container", styles.topMargin)}>
        <div className={classname('columns', styles.columns)}>
          <div className={classname("column", styles.column, 'is-relative')}>
            <div className={styles.textBackground}>
              <Slider duration={200} infinite={false}>
                {slides.map((slide, index) => <div key={index}>
                  <h2 className="subtitle no-margin">{slide.title}</h2>
                  <div>{slide.description}</div>
                </div>)}
              </Slider>
            </div>
          </div>
          <div className={classname("column", styles.column, styles.right)}>
            <p className="subtitle is-3 has-small-spacing has-text-weight-light">We have done this so many times, we have the process down to a science.</p>
          </div>
        </div>
      </div> */}
      </section>
      <Pricing scrollId={pricingElementId} />
    </Layout>
  )
}

export default EloomiIntegrations