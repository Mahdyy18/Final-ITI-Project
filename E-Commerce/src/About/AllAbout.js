import React from 'react'
import Top from '../Top'
import AboutBanner from './AboutBanner'
import Services from './Services'
import Interior from './Interior'
import WhatTheySay from './WhatTheySay'
import CalltoAction from './CalltoAction'
import Footer from '../Footer'
import { CartProvider} from "react-use-cart";

function AllAbout() {
  return (
    <CartProvider>
      <Top/>
      <AboutBanner/>
      <Services/>
      <Interior/>
      <WhatTheySay/>
      <CalltoAction/>
      <Footer/>
    </CartProvider>
  )
}

export default AllAbout
