import React from "react"
import PageLayout from "../../components/pageLayout"
import useProcessOptimization from './hooks';
import Calculator from './components/calculator';
import Examples from './components/examples'
import ContactForm from '../../components/contactForm'
import { FaUser, FaTasks, FaDolly } from 'react-icons/fa'
import Listing from "../../components/listing";

const ProcessOptimization = ({ location }) => {
  const { hero } = useProcessOptimization();
  hero.style = {'backgroundPositionY': '30%'};
  return (
    <PageLayout location={location} hero={hero} title='Process optimization' subtitle='Let us help you optimize your processes through technology'>
      <section className="section is-medium">
        <div className="container">
          <div className="columns">
            <Listing icon={FaTasks} title="Time is precious">
              <p>You or your team most likely have tasks they do on a regular basis. Perhaps even most of your time revolves around doing the same tasks over and over: Creating users, fill out forms, sending outreach emails, you name it. By reducing the time you spend on these tasks you will have more time to focus on the less trivial tasks.</p>
            </Listing>
            <Listing icon={FaDolly} title="Automation">
              <p>Complete automation is when there is no longer any work required in doing the task that needed to be done. These tasks are usually scheduled tasks or tasks where you have to do a very specific set of actions in response to a change. This could be pulling reports or sending a specific email whenever something happens.</p>
            </Listing>
            <Listing icon={FaUser} title="Augmentation">
              <p>Some tasks are not suitable to be fully automated. There are a lot of reason for that but when it comes down to there are two overarching reasons: You possess knowledge that makes the steps slightly different or you need to interpret the output somehow, that is not feasible for the computer to do.</p>
            </Listing>
          </div>
        </div>
      </section>
      <Examples />
      <Calculator />
      <ContactForm isDark from='process-optimization' />
    </PageLayout>
  )
}

export default ProcessOptimization
