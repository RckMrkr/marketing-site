import React from 'react';
import styles from './side-by-side.module.scss'
import Img from 'gatsby-image';
import classname from 'classname'

export default ({frontImage, backImage, firstTitle, firstText, firstOffer, secondTitle, secondText, secondOffer, thirdText, thirdTitle, thirdOffer}) => {
  return (
  <div className={classname("container", styles.whatWeDo)}>
    <div className="columns">
      <div className="column is-one-third">
        {firstTitle && <h4 className={classname('title', 'is-3', styles.title)}>{firstTitle}</h4>}
        {firstText && <p>{firstText}</p>}
        { firstOffer && <p className={classname("has-text-warning", styles.offer)}>{firstOffer}</p> }
        { secondTitle && <h4 className={classname('title', 'is-3', styles.title)}>{secondTitle}</h4> }
        { secondText && <p>{secondText}</p> }
        { secondOffer && <p className={classname("has-text-warning", styles.offer)}>{secondOffer}</p> }
        { thirdTitle && <h4 className={classname('title', 'is-3', styles.title)}>{thirdTitle}</h4> }
        { thirdText && <p>{thirdText}</p> }
        { thirdOffer && <p className={classname("has-text-warning", styles.offer)}>{thirdOffer}</p> }
      </div>
      <div className={classname("column is-offset-1 is-relative", styles.extra)}>
        <div className={styles.imageWrapper}>
          <div className={styles.backImage}><Img {...backImage} /></div>
          <div className={styles.frontImage}><Img {...frontImage} /></div>
        </div>
      </div>
    </div>
  </div>
);
  }