import React from "react"
import Layout from "../../components/layout"
import useProcessAutomation from './hooks';
import Calculator from './components/calculator';
import Examples from './components/examples'
import ContactForm from '../../components/contactForm'
import Img from 'gatsby-image'
import styles from './process-automation.module.scss'
import classname from 'classname'

const ProcessAutomation = ({ location }) => {
  const { hero, robot, screensharing, textBackground, showExamples, setShowExamples } = useProcessAutomation();
  hero.style = {'backgroundPositionY': '30%'};
  return (
    <Layout location={location} hero={hero} title='Process automation' subtitle='Do more, quicker and with fewer errors'>
      <section className={classname("section is-small", styles.section)}>
        <div className="container">
          <div className={classname('columns', styles.columns)}>
            <div className={classname("column", styles.column, styles.left)}>
              <h3 className="title is-3">Time is precious</h3>
              <p>You or your team most likely have tasks they do on a regular basis. Perhaps even most of your time revolves around doing the same tasks over and over: Creating users, fill out forms, sending outreach emails, you name it. By reducing the time you spend on these tasks you will have more time to focus on the less trivial tasks.</p>
            </div>
            <div className={classname("column", styles.column)}>
              <Img {...screensharing} />
            </div>
          </div>
          <div className={classname('columns', styles.columns)}>
            <div className={classname("column", styles.column, 'is-relative')}>
              <div onClick={() => setShowExamples(true)}>
                <Img {...textBackground} className='clickable' />
              </div>
              <div className={styles.imageText}>
                <p className="subtitle is-3 has-small-spacing has-text-white has-text-weight-light">Do you need some examples?</p>
              </div>
            </div>
            <div className={classname("column", styles.column, styles.right)}>
              <h3 className="title is-3">Automation</h3>
              <p>Complete automation is when there is no longer any work required in doing the task that needed to be done. These tasks are usually scheduled tasks or tasks where you have to do a very specific set of actions in response to a change. This could be pulling reports or sending a specific email whenever something happens.</p>
              <p onClick={() => setShowExamples(true)} className={classname("has-text-warning", styles.offer, 'clickable')}>See problem vs solution examples &#8594;</p>
            </div>
          </div>
          <div className={classname('columns', styles.columns)}>
            <div className={classname("column", styles.column, styles.left)}>
              <h3 className="title is-3">Augmentation</h3>
              <p>Some tasks are not suitable to be fully automated. There are a lot of reason for that but when it comes down to there are two overarching reasons: You possess knowledge that makes the steps slightly different or you need to interpret the output somehow, that is not feasible for the computer to do.</p>
            </div>
            <div className={classname("column", styles.column)}>
              <Img {...robot} />
            </div>
          </div>
        </div>
        <Examples setShowModal={setShowExamples} showModal={showExamples} />
      </section>
      <Calculator />
    </Layout>
  )
}

export default ProcessAutomation
