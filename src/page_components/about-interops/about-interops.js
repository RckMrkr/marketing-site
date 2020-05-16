import React from "react"
import PageLayout from "../../components/pageLayout"
import useAboutInterOps from './hooks';
import Tiles from '../../components/tiles'
import TextTile from "../../components/textTile";
import BackgroundImage from 'gatsby-background-image'
import ContactForm from '../../components/contactForm'

const Contact = ({ location }) => {
  const { hero } = useAboutInterOps();

  return (
    <PageLayout location={location} hero={hero} title='About InterOps' subtitle="What do we believe in?">
      <section className="section">
        <div className="container">
        <p className="title has-text-centered i" style={{marginBottom: '20px'}}>At InterOps we live by a few simple truths.</p>
        <Tiles>
          <TextTile textClasses={['notification', 'is-warning', 'is-padded', 'is-size-4', '']}>
            <p className="has-text-centered subtitle is-4">People like doing a good job</p>
          </TextTile>
          <TextTile textClasses={['notification', 'is-warning', 'is-padded', 'is-size-6']}>
            <p className="has-text-centered subtitle is-4">Our customers depend on us doing a good job</p>
          </TextTile>
          <TextTile textClasses={['notification', 'is-warning', 'is-padded', 'is-size-6']}>
            <p className="has-text-centered subtitle is-4">Effective communication is tough</p>
          </TextTile>
        </Tiles>
      </div>
      </section>
      <section className="section is-dark">
        <div className="container">
          <p className="title has-text-centered">Working from these truths lead to a few principles</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Tiles>
            <TextTile textClasses={['notification', 'is-warning', 'is-padded', 'is-size-4', 'is-flex', 'is-vertical-center']}>
              <p className="has-text-centered subtitle is-3">We do not take on jobs where we believe we are not able to do a good job.</p>
            </TextTile>
            <TextTile textClasses={['notification', 'is-dark', 'is-padded', 'is-size-6', 'has-text-centered']}>
              <p style={{marginBottom: '10px'}}>We want to be proud of every single solution we deliver. We do that for our customers, for our employees and for the company.</p>
              <p>If we do not feel we would be able to live up the expectations of the customer, we will be more than happy to point them to a place where they have the capacity or the expertise to complete the job.</p>
            </TextTile>
          </Tiles>
          <Tiles>
            <TextTile textClasses={['notification', 'is-dark', 'is-padded', 'is-size-6', 'has-text-centered']}>
              <p style={{marginBottom: '10px'}}>We want to be proud of every single solution we deliver. We do that for our customers, for our employees and for the company.</p>
              <p>If we do not feel we would be able to live up the expectations of the customer, we will be more than happy to point them to a place where they have the capacity or the expertise to complete the job.</p>
            </TextTile>
            <TextTile textClasses={['notification', 'is-warning', 'is-padded', 'is-size-4', 'is-flex', 'is-vertical-center']}>
              <p className="has-text-centered subtitle is-3">We do not take on jobs where we believe we are not able to do a good job.</p>
            </TextTile>
          </Tiles>
            <div className="container">
            <div className="hero is-medium">
            <BackgroundImage
                fadeIn
                className="hero-body"
                {...hero}
              >
                </BackgroundImage>
            </div>
            </div>
          <Tiles>
            <TextTile textClasses={['notification', 'is-warning', 'is-padded', 'is-size-4', 'is-flex', 'is-vertical-center']}>
              <p className="has-text-centered subtitle is-3">We do not take on very big projects</p>
            </TextTile>
            <TextTile textClasses={['notification', 'is-dark', 'is-padded', 'is-size-6', 'has-text-centered']}>
            <p style={{marginBottom: '10px'}}>We do not employ project managers, which are needed for big projects</p>
              <p>We believe we deliver the best experience for our employees and our customers when we have the same person coding and talking with the customer. Having the same person handling these parts enables the employee to see the problems first hand which motivates him to come up with solution that works in the exact environment the customers works.</p>
            </TextTile>
          </Tiles>
        </div>
      </section>
      <ContactForm isDark from='about-interops' />
    </PageLayout>
  )
}

export default Contact
