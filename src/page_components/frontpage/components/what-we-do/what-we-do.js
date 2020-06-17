import React from 'react';
import styles from './what-we-do.module.scss'
import Img from 'gatsby-image';
import classname from 'classname'

export default ({frontImage, backImage}) => {
  return (
  <div className={classname("container", styles.whatWeDo)}>
    <div className="columns">
      <div className="column is-one-third">
        <h4 className={classname('title', 'is-3', styles.title)}>Process optimization</h4>
        <p>We help companies improve their process through technology. By looking at the processes you want optimized, we will try to find the correct level of automation for that task, so you can get more work done (and with fewer errors). Depending on the time it usually takes and how often it is done, some light automation may save you or your team multiple hours per week!</p>
        <h4 className={classname('title', 'is-3', styles.title)}>Integrations</h4>
        <p>We help companies utilize their existing systems to a higher degree by making them work better together. Some systems know how to talk together and have built in ways to talk to specific systems. However, that's still the minority by a huge margin. We help companies by creating ways for these systems to talk together. Not only do they talk together, but they can do it in ways that make sense for you.</p>
        <p className="has-text-warning">Get an offer for FREE &#8594;</p>
      </div>
      <div className="column is-offset-1 is-relative">
        <div className={styles.backImage}><Img {...backImage} /></div>
        <div className={styles.frontImage}><Img {...frontImage} /></div>
      </div>
    </div>
  </div>
);
  }