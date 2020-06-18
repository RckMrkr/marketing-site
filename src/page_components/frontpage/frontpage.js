import React from "react"
import useFrontpage from './hooks';
import Top from './components/top'
import WhatWeDo from './components/what-we-do'
import Footer from '../../components/footer'

const Frontpage = ({ location }) => {
  const { frontImage, backImage } = useFrontpage();
  return (
    <>
      <Top location={location} />
      <WhatWeDo frontImage={frontImage} backImage={backImage} />
      <Footer />
    </>
  )
}

export default Frontpage
