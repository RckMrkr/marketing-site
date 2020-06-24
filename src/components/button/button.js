import React from 'react'
import classname from 'classname'
import styles from './button.module.scss'

export default ({className, children, type, ...props}) => (
    <button {...props} className={classname(styles.button, className, styles[type])}>{children}</button>
)