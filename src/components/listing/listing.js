import React from 'react';
import classname from 'classname';
import styles from './listing.module.scss';

export default ({children, className, title, icon: Icon, isDark, iconClass = 'isSuccess'}) => {
  
  return (
    <div className={classname('column', styles.listing, className)}>
      <div className="is-flex is-vertical-center">
        <div className={classname(styles.icon, styles[iconClass])}>
          { Icon && <Icon size='100%' />}
        </div>
        <div className={classname(styles.title, { 'is-white': isDark, 'is-black': !isDark })}>
          <h4 className={classname('title', 'is-4', {"is-white": isDark, "is-black": !isDark})}>{title}</h4>
        </div>
      </div>
      <div className={classname(styles.content, {[styles.isDark]: !isDark})}>
        {children}
      </div>
    </div>
  )
}