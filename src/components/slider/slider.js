import React from 'react'
import Slider from 'react-animated-slider';
import useSlider from './hooks'
import './slider.scss';

export default (props) => {
  const { ref } = useSlider();

  return <div style={{width: '100%', height: '100%'}} ref={ref}><Slider {...props} /></div>
}