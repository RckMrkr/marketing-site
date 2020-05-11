import React from "react"
import PageLayout from "../../components/pageLayout"
import useEloomiIntegrations from './hooks';
import Tiles from '../../components/tiles'
import './eloomi-integrations.css';
import TextTile from "../../components/textTile";
import ImageTile from "../../components/imageTile";
import Slider from 'react-animated-slider';
import Pricing from './components/pricing';
import ContactForm from '../../components/contactForm';

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
  const sliderClass = 'slider'
  const { hero, eloomiLogo, insights } = useEloomiIntegrations(sliderClass);

  return (
    <PageLayout location={location} hero={hero} title='eloomi' subtitle='InterOps is the official integration partner for eloomi'>
      <section className="section">
        <div className="container">
          <Tiles>
            <TextTile textClasses={['notification', 'is-primary', 'is-padded', 'is-size-4']}>
              <p className="has-text-centered subtitle is-3">As the official eloomi integration partner, we know what it takes.</p>
            </TextTile>
            <ImageTile imageProps={eloomiLogo} imageBackground='#0030c0' />
          </Tiles>
          <Tiles>
            <ImageTile imageProps={{...insights, style:{ width: '100%'}}} imageBackground='#FFF' />
            <TextTile textClasses={['is-flex', 'is-vertical-center', 'is-horizontal-center', 'has-text-centered']}>
              <p className='is-size-4'>At InterOps we have spent a lot of time in the eloomi platform and with the APIs that eloomi provide. We will be able to steer you through the process and deliver an integration you can trust.</p>
            </TextTile>
          </Tiles>
        </div>
      </section>
      <section className="section is-dark">
        <div className="container has-text-centered">
          <h3 className="title">We got the integration process down to a science</h3>
          <div className="container">
          <Tiles>
            <TextTile textClasses={['notification', 'is-success', 'is-padded', 'is-flex', 'is-horizontal-center', 'is-vertical-center']}>
              <p className="subtitle is-3 has-text-centered">Why reinvent the wheel?</p>
            </TextTile>
            <TextTile textClasses={['notification', 'is-success', 'is-flex', 'is-vertical-center']}>
              <Slider duration={200} infinite={false}>
                {slides.map((slide, index) => <div className='slide' key={index}>
                  <h2 className="subtitle no-margin">{slide.title}</h2>
                  <div>{slide.description}</div>
                </div>)}
              </Slider>
            </TextTile>
          </Tiles>
        </div>
        </div>
      </section>
      <Pricing />
      <ContactForm isDark from='eloomi-integrations' />
    </PageLayout>
  )
}

export default EloomiIntegrations