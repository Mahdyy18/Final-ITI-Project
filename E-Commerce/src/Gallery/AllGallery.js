import React from 'react'
import Top from '../Top'
import Footer from '../Footer'
import GalleryBanner from './GalleryBanner'
import CalltoAction from '../About/CalltoAction'
import { CartProvider} from "react-use-cart";
import GalleryPage from './GalleryPage'


function AllGallery() {
  return (
    <CartProvider>
      <Top/>
      <GalleryBanner/>
      <GalleryPage/>
      <CalltoAction/>
      <Footer/>
    </CartProvider>
  )
}

export default AllGallery
