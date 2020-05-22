import React from "react"
import PageLayout from "../../components/pageLayout"
import styles from './frontpage.module.scss';
import ContactForm from "../../components/contactForm";
import useFrontpage from './hooks';
import Listing from '../../components/listing';
import { FaHandshake, FaFileSignature } from 'react-icons/fa'
import Tiles from "../../components/tiles";
import ImageTile from "../../components/imageTile";
import TextTile from "../../components/textTile";
import { navigate, Link } from "gatsby"

const Frontpage = ({ location }) => {
  const { hero, eloomi } = useFrontpage();
  hero.style = {backgroundPositionY: '70%'};
  return (
    <PageLayout location={location} hero={hero} title='A strong partner' subtitle='We will help every step of the way'>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <Listing title="Process optimization" className="is-two-fifths" icon={FaFileSignature}>
              <p>We help companies improve their process through technology. By looking at the processes you want optimized, we will try to find the correct level of automation for that task, so you can get more work done (and with fewer errors). Depending on the time it usually takes and how often it is done, some light automation may save you or your team multiple hours per week!</p>
            </Listing>
            <Listing className="is-two-fifths" title="Integrations" icon={FaHandshake}>
              <p>We help companies utilize their existing systems to a higher degree by making them work better together. Some systems know how to talk together and have built in ways to talk to specific systems. However, that's still the minority by a huge margin. We help companies by creating ways for these systems to talk together. Not only do they talk together, but they can do it in ways that make sense for you.</p>
            </Listing>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Tiles>
            <ImageTile imageProps={eloomi} className={styles.eloomi} imageBackground='#0030c0' role='button' onClick={() => navigate('/eloomi-integrations')} />
            <TextTile textClasses={['notification', 'is-dark', 'is-padded', 'is-size-6']}>
              <h4 className="subtitle is-3">Partnership with eloomi</h4>
              <p>We have strong connections to eloomi and have a lot of experience with both their platform and their APIs. Because of that, we've been named their Official Integration Partner. <Link to='/eloomi-integrations'>Read more about it here</Link></p>
            </TextTile>
          </Tiles>
        </div>
      </section>
      <ContactForm isDark from="frontpage" />
    </PageLayout>
  )
}

export default Frontpage
