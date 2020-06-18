import React from 'react';
import classname from 'classname';
import useContactForm from './hooks';
import { Element } from 'react-scroll';
import backgroundImage from '../../images/frontpage/top-background.svg'
import styles from './contactForm.module.scss'
import Button from '../button'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default ({from}) => {
  const {
    name, setName,
    email, setEmail,
    message, setMessage,
    showModal, setShowModal,
    isSubmitting, setIsSubmitting,
    contactElementName,
  } = useContactForm();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true)
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message, sentFrom: from })
      });
      setShowModal('success');
      setIsSubmitting(false);
    } catch(error){
      setIsSubmitting(false);
      setShowModal('error');
    }
  }
  const setProperty = setter => event => setter(event.target.value);
  return (
    <Element name={contactElementName}>
    <section className={classname("section", styles.section)} style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container">
        <h4 className="title has-text-centered">How can we help?</h4>
        <div className="columns is-centered is-horizontal-center">
          <div className="column is-half">
            <form onSubmit={handleSubmit}
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
              <input type="hidden" name="sentFrom" value={from} />
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label" htmlFor='contactFormName'>Name</label>
                    <div className="control">
                      <input placeholder="Type in your name" name="name" id="contactFormName" onChange={setProperty(setName)} value={name} className="input" type="text" />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label" htmlFor='contactFormEmail'>E-mail</label>
                    <div className="control">
                      <input placeholder="Add your email" name="email" id="contactFormEmail" onChange={setProperty(setEmail)} value={email} className="input" type="email" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
              <div className="column">
                  <div className="field">
                    <label className="label" htmlFor='contactFormMessage'>Message</label>
                    <div className="control">
                      <textarea placeholder="What are you looking for?" name="message" id="contactFormMessage" onChange={setProperty(setMessage)} className="textarea" value={message}></textarea>
                    </div>
                  </div>
              </div></div>
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <p className="control has-text-centered">
                      <Button type='warning'>Send</Button>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={classname('modal', {'is-active': showModal === 'success'})}>
        <div className="modal-background" role="button" onClick={() => setShowModal(null)}></div>
        <div className="modal-content">
          <div className="box is-success">
            <h5 className="title has-text-white">Thank you</h5>
            <p className="has-text-white">Your message has been submitted and we will get back to you shortly, usually in less than 1 business day.</p>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
      <div className={classname('modal', {'is-active': showModal === 'error'})}>
        <div className="modal-background" role="button" onClick={() => setShowModal(null)}></div>
        <div className="modal-content">
          <div className="box is-danger">
            <h5 className="title">We're so sorry!</h5>
            <p>
              An error occured during the submission, so it is possible the submission didn't go thought.<br />
              Please reach out using our email <a className="has-text-macaroon" href="mailto:contact@interops.io">contact@interops.io</a> instead.<br /><br />
              And, again, we are very sorry for the inconvenience.
            </p>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </section>
    </Element>
  )
}
