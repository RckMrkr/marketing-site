import React from "react"
import PageLayout from "../../components/pageLayout"
import useProcessOptimization from './hooks';
import Tiles from '../../components/tiles';
import TextTile from "../../components/textTile";
import Calculator from './components/calculator';
import Examples from './components/examples'
import ContactForm from '../../components/contactForm'

const ProcessOptimization = ({ location }) => {
  const { hero } = useProcessOptimization();
  hero.style = {'backgroundPositionY': '30%'};
  return (
    <PageLayout location={location} hero={hero} title='Process optimization' subtitle='Let us help you optimize your processes through technology'>
      <section className="section">
        
        <div className="container">
          <Tiles>
            <TextTile textClasses={['notification', 'is-primary', 'is-padded', 'is-size-4']}>
              <p className="has-text-centered subtitle is-3">Time is valuable.<br />Why not make the most of it?</p>
            </TextTile>
            <TextTile textClasses={['is-flex', 'is-vertical-center', 'is-horizontal-center', 'has-text-centered']}>
              <p className='is-size-4 has-text-dark'>If you, your team or your department are manually doing repetitive tasks, there's a good chance it can be automated.<br />By automating a task you not only save to, but you also reduce the risk of errors.</p>
            </TextTile>
          </Tiles>
        </div>
      </section>
      <Examples />
      <Calculator />
      <ContactForm isDark from='process-optimization' />
    </PageLayout>
  )
}

export default ProcessOptimization
