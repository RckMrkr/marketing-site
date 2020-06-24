import React from "react"
import useFrontpage from './hooks';
import Top from './components/top'
import Boxes from './components/boxes'
import Footer from '../../components/footer'
import ContactForm from '../../components/contactForm'
import SideBySide from '../../components/side-by-side'
import {Link as ScrollLink} from 'react-scroll'

const Frontpage = ({ location }) => {
  const { frontImage, backImage, contactElementName } = useFrontpage();
  return (
    <>
      <Top location={location} />
      <SideBySide
        frontImage={frontImage}
        backImage={backImage}
        firstTitle="Process Automation"
        firstText="We help companies improve their process through technology. By looking at the processes you want optimized, we will try to find the correct level of automation for that task, so you can get more work done (and with fewer errors). Depending on the time it usually takes and how often it is done, some light automation may save you or your team multiple hours per week!"
        secondTitle="Integrations"
        secondText="We help companies utilize their existing systems to a higher degree by making them work better together. Some systems know how to talk together and have built in ways to talk to specific systems. However, that's still the minority by a huge margin. We help companies by creating ways for these systems to talk together. Not only do they talk together, but they can do it in ways that make sense for you."
        secondOffer={<ScrollLink spy smooth to={contactElementName}>Get an offer for FREE &#8594;</ScrollLink>}
      />
      <Boxes />
      <ContactForm from={location.pathname} />
      <Footer />
    </>
  )
}

export default Frontpage
