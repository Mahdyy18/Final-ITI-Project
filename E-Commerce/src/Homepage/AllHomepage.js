import React from 'react'
import Top from '../Top'
import Banner from './Banner'
import Search from './Search'
import Explore from './Explore'
import Trending from './Trending'
import ContactUs from './ContactUs'
import Footer from '../Footer'
import CalltoAction from '../About/CalltoAction'
import { CartProvider} from "react-use-cart";
import SubNav from '../SubNav'

function AllHomepage() {
  return (
    <CartProvider>
      <SubNav/>
      {/* <div className='pt-1'></div> */}
      <Top/>
      <Banner/>
      <Search/>
      <Explore/>
      <Trending/>
      <ContactUs/>
      <CalltoAction/>
      <Footer/>
    </CartProvider>
  )
}

export default AllHomepage
