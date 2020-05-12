import React from 'react';
import classname from 'classname';

const conversion = [
  ['seconds', 1],
  ['minutes', 60],
  ['hours', 60 * 60],
  ['days', 24 * 60 * 60],
  ['weeks', 7 * 24 * 60 * 60],
  ['months', 30.42 * 24 * 60 * 60]
]

export default ({seconds, className}) => {
  if(seconds === 0){
    return <span className={classname('time', className)}>nothing</span>
  }

  const [unit, scale] = conversion.filter(([, scale]) => {
    return seconds / scale > 1;
  }).pop();
  const amountForScale = Math.round(seconds / scale);
  const formattedUnit = amountForScale == 1
    ? unit.slice(0, -1)
    : unit;
  
    return <span className={classname('time', className)}>{ amountForScale } {formattedUnit}</span>
}