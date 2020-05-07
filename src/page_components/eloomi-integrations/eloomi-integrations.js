import React from "react"
import PageLayout from "../../components/pageLayout"
import useEloomiIntegrations from './hooks';
import Tiles from '../../components/tiles'
import './eloomi-integrations.css';
import TextTile from "../../components/textTile";
import ImageTile from "../../components/imageTile";
import Slider from 'react-animated-slider';

const slides = [
  { title: 'Identify internal stakeholders', description: 'Lorem ipsum'},
  { title: 'Receive API credentials and access to test platform', description: 'Lorem ipsum'},
  { title: 'Identify how to receive/extract data from existing system', description: 'Lorem ipsum'},
  { title: 'Discuss and decide on data to be transferred to eloomi', description: 'Lorem ipsum'},
  { title: 'Integration', description: 'Lorem ipsum'},
  { title: 'Acceptance test', description: 'Lorem ipsum'},
  { title: 'Migration to production', description: 'Lorem ipsum'},
  { title: 'Monitor', description: 'Lorem ipsum'},
];

const EloomiIntegrations = ({ location }) => {
  const sliderClass = 'slider'
  const { hero, eloomiLogo } = useEloomiIntegrations(sliderClass);
  return (
    <PageLayout location={location} hero={hero} title='eloomi' subtitle='InterOps is the official integration partner for eloomi'>
      <section className="section">
        <div className="container">
          <Tiles>
            <TextTile textClasses={['notification', 'is-primary', 'is-padded', 'is-size-4']}>
              <p>You should not have to teach your vendor how eloomi works</p>
            </TextTile>
            <ImageTile imageProps={eloomiLogo} imageBackground='#0030c0' />
          </Tiles>
          <Tiles>
            <ImageTile imageProps={eloomiLogo} imageBackground='#0030c0' />
            <TextTile textClasses={['notification', 'is-white', 'is-size-4']}>
              <p>You have a lot of things to do. Teaching your integration partner how eloomi works should not be one of them. At InterOps we have worked extensively with the platform and know how both the APIs and the actual platform works.</p>
            </TextTile>
          </Tiles>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container has-text-centered">
          <h3 className="is-size-3">We got the integration process down to a science</h3>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Tiles>
            <TextTile textClasses={['notification', 'is-primary', 'is-padded', 'is-size-4']}>
              <p>You should not have to teach your vendor how eloomi works</p>
            </TextTile>
            <TextTile textClasses={['notification', 'is-primary']}>
            <Slider onSlideChange={event => console.log(event)} duration={200} infinite={false}>
              {slides.map((slide, index) => <div className='slide' key={index}>
                <h2 className="is-size-4">{slide.title}</h2>
                <hr />
                <div>{slide.description}</div>
              </div>)}
            </Slider>
            </TextTile>
          </Tiles>
        </div>
      </section>
    </PageLayout>
  )
}

export default EloomiIntegrations
