import React from 'react';
import Img from 'gatsby-image'
import classname from 'classname'

const TextTile = ({textClasses, text}) => (
  <div className="tile is-parent">
    <div className={classname('tile', 'is-child', textClasses)}>
      { text }
    </div>
  </div>
)

const ImageTile = ({imageProps, imageBackground}) => (
  <div className="tile is-parent">
    <div className="tile is-child notification is-flex is-vertical-center is-horizontal-center" style={{backgroundColor: imageBackground}}>
        <Img fadeIn={false} loading="eager" {...imageProps} />
    </div>
  </div>
)

export default ({ children, imageProps, textClasses, imageBackground, reverse }) => {
  let tiles = [
    <TextTile text={children} textClasses={textClasses} key='text' />,
    <ImageTile imageBackground={imageBackground} imageProps={imageProps} key='image' />,
  ];
  if(reverse){
    tiles = tiles.reverse()
  }
  return (
    <div className="tile is-ancestor">
      { tiles }
    </div>
  )
}