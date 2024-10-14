import React from 'react'
import Top from '../Top'
import ContactBanner from './ContactBanner'
import ContactMap from './ContactMap'
import ContactUsPage from './ContactUsPage'
import CalltoAction from '../About/CalltoAction'
import Footer from '../Footer'
import { CartProvider} from "react-use-cart";

function AllContact() {
  return (
    <CartProvider>
      <Top/>
      <ContactBanner/>
      <ContactMap/>
      <ContactUsPage/>
      <CalltoAction/>
      <Footer/>
    </CartProvider>
  )
}

export default AllContact
