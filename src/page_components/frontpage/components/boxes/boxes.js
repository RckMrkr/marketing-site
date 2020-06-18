import React from 'react';
import useBoxes from './hooks';
import classname from 'classname'
import Img from 'gatsby-image'
import styles from './boxes.module.scss'
import { Link } from 'gatsby'

export default () => {
  
  const {
    eloomiPartnershipBackground,
    whatWeBelieveBackground,
    eloomiScreenshot,
  } = useBoxes()

  return (
    <div className={classname("container", styles.boxes)}>
      <div className={classname("columns", styles.columns)}>
        <div className={classname("column is-relative", styles.column)}>
          <Link to="/about-interops"><Img {...whatWeBelieveBackground} /></Link>
          <div className={classname("text has-text-centered", styles.text)}>
            <h4 className={styles.title}>What we believe in</h4>
            <p><Link to="/about-interops">Read more &#8594;</Link></p>
          </div>
        </div>
        <div className={classname("column is-relative", styles.column)}>
          <Link to="/eloomi-integrations">
            <Img {...eloomiPartnershipBackground} />
          </Link>
          <div className={classname("text has-text-centered", styles.text)}>
            <Img {...eloomiScreenshot} style={{width: '60%', margin: '0 auto 5%'}} />
            <h4 className={styles.title}>Partnership with eloomi</h4>
            <p><Link to="/eloomi-integrations">Read more &#8594;</Link></p>
            
          </div>
        </div>
      </div>
    </div>
  )
}