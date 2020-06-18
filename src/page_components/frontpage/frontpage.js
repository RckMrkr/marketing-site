import React from "react"
import useFrontpage from './hooks';
import Top from './components/top'
import WhatWeDo from './components/what-we-do'
import Boxes from './components/boxes'
import Footer from '../../components/footer'
import ContactForm from '../../components/contactForm'

const Frontpage = ({ location }) => {
  const { frontImage, backImage } = useFrontpage();
  return (
    <>
      <Top location={location} />
      <WhatWeDo frontImage={frontImage} backImage={backImage} />
      <Boxes />
      <ContactForm from="Frontpage" />
      <Footer />
    </>
  )
}

export default Frontpage
